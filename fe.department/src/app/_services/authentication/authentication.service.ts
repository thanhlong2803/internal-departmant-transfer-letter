import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { localStorageHelper } from "src/app/_helpers/localStorageHelper";
import { LoginResponse } from "src/app/_models/login.model";
import { environment } from "src/environments/environment";



@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<LoginResponse>;
    public currentUser: Observable<LoginResponse>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<LoginResponse>(localStorageHelper.getItem(`AccessUserKey`));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public login(username: string, password: string) {
        return this.http.post<any>(`${environment.api_url}/Authentication/Login`, { username, password }).pipe(map(resp => {
            //store loginResponse details and jwt token in local storage to keep user logged in between page refreshes
            if (resp !== undefined && resp != null) {
                this.getAccessUser(resp);
                this.currentUserSubject.next(resp);
                return resp;
            }
        }))
    }

    public logout(){
         // remove user from local storage and set current user to null
         localStorageHelper.removeItem(`AccessUserKey`);     
        //  this.currentUserSubject.next(null);
    }

    public get currentUserValue(): LoginResponse {
        return this.currentUserSubject.value;
    }

    private getAccessUser(LoginResponse: LoginResponse) {
        localStorageHelper.setItem(`AccessUserKey`, LoginResponse);
    }

    private getItemUser(LoginResponse: LoginResponse) {
        localStorageHelper.getItem(`AccessUserKey`);
    }

}