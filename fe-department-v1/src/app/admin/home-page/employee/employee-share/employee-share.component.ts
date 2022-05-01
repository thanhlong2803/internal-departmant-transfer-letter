import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { Employee, EmployeeList } from 'src/app/fe.data/employee/employee.model';
import { AuthenticationService } from 'src/app/fe.services/authentication/authentication.service';
import { EmployeeService } from 'src/app/fe.services/employee/employee.service';

@Component({
    selector: 'app-employee-share',
    templateUrl: './employee-share.component.html',
    styleUrls: ['./employee-share.component.css']
})

export class EmployeeShareComponent {
    public manageEmployee = {} as Employee;
    public employeeList: Array<EmployeeList> = [];
    constructor(private authenticationService: AuthenticationService,
        private EmployeeService: EmployeeService
    ) { }

    ngOnInit() {
        this.manageEmployee = this.authenticationService.getItemUser();
        if (this.manageEmployee !== undefined && this.manageEmployee !== null) {
            this.getAllEmployeeOfDepartment(this.manageEmployee.id, this.manageEmployee.departmentId);
        }
    }

    private getAllEmployeeOfDepartment(employeeId: number, departmentId: number) {
        this.EmployeeService.getAllEmployeeOfDepartment(employeeId, departmentId)
            .pipe(first())
            .subscribe(
                data => {
                    this.employeeList = data;
                },
                error => {

                });
    }

}
