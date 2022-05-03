import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { Department } from 'src/app/fe.data/department/department.model';
import { CreateEmployee, Employee, EmployeeList } from 'src/app/fe.data/employee/employee.model';
import { AuthenticationService } from 'src/app/fe.services/authentication/authentication.service';
import { DepartmentService } from 'src/app/fe.services/department/department.service';


@Component({
    selector: 'app-employee-share',
    templateUrl: './employee-share.component.html',
    styleUrls: ['./employee-share.component.css']
})

export class EmployeeShareComponent {
    public infoAdmin = {} as Employee;
    public employee = {} as CreateEmployee;
    public departments = new Array<Department>();

    constructor(private authenticationService: AuthenticationService,
        private departmentService: DepartmentService
    ) { }

    ngOnInit() {
        this.infoAdmin = this.authenticationService.getItemUser();
        this.getDataDepartment();
    }

    getDataDepartment() {
        this.departmentService.getAllDepartment()
            .pipe(first())
            .subscribe(
                departments => {
                 this.departments = departments;                 
                }
            );
    }

    getShareData(): CreateEmployee {
        return this.employee;
    }

}
