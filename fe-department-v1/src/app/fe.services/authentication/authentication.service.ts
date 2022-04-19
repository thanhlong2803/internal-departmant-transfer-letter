import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Employee } from "src/app/fe.data/employee/employee.model";
import { localStorageHelper } from "src/app/_helpers/localStorageHelper";
import { environment } from "src/environments/environment";
import { map, filter, catchError, mergeMap } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<Employee>;
    public currentUser: Observable<Employee>;
    public showStorage = {} as Employee;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<Employee>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public login(email: string, password: string) {
        return this.http.post<any>(`${environment.api_url}/Authentication`, { email, password }).pipe(map(resp => {
            //store loginResponse details and jwt token in local storage to keep user logged in between page refreshes
            if (resp !== undefined && resp != null) {
                this.getAccessUser(resp);
                this.currentUserSubject.next(resp);
                return resp;
            }
        }))
    }

    public logout() {
        // remove user from local storage and set current user to null
        localStorageHelper.removeItem(`AccessUserKey`);
        this.currentUserSubject.next({} as Employee);
    }

    public get currentUserValue(): Employee {
        return this.currentUserSubject.value;
    }

    private getAccessUser(LoginResponse: Employee) {
        localStorageHelper.setItem(`AccessUserKey`, LoginResponse);
    }

    private getItemUser() {
        localStorageHelper.getItem(`AccessUserKey`);
    }

}