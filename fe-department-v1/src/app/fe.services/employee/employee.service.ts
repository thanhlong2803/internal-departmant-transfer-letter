import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { map } from 'rxjs/operators';
import { CreateEmployee } from "src/app/fe.data/employee/employee.model";


@Injectable({ providedIn: 'root' })
export class EmployeeService {
    constructor(private http: HttpClient) { }
    public getAllEmployeeOfDepartment(employeeId: number, departmentId: number) {
        return this.http.get<any>(`${environment.api_url}/Employee/GetAllEmployeeInDepartment?employeeId=${employeeId}&departmentId=${departmentId}`).pipe(map(resp => {
            if (resp !== undefined && resp != null) {
                return resp;
            }
        }))
    }

    public CreateEmployee(employee : CreateEmployee) {
        return this.http.post<any>(`${environment.api_url}/Employee/CreateEmployee`, employee).pipe(map(resp => {
            if (resp !== undefined && resp != null) {
                return resp;
            }
        }))
    }
}