import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class EmployeeService {

    constructor(private http: HttpClient) { }

    public getAllEmployeeOfDepartment(employeeId: number, departmentId: number) {
debugger
        return this.http.get<any>(`${environment.api_url}/Employee/GetAllEmployeeInDepartment?employeeId=${employeeId}&departmentId=${departmentId}`).pipe(map(resp => {
            if (resp !== undefined && resp != null) {
                return resp;
            }
        }))
    }

}