import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class DepartmentService {
    constructor(private http: HttpClient) { }    
    public getAllDepartment() {
        return this.http.get<any>(`${environment.api_url}/Department/GetAllDepartment`).pipe(map(resp => {
            if (resp !== undefined && resp != null) {                
                return resp;
            }
        }))
    }

}