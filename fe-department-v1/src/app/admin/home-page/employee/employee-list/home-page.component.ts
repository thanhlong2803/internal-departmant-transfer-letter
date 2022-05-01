import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Employee, EmployeeList, PositionType } from 'src/app/fe.data/employee/employee.model';
import { AlertService } from 'src/app/fe.services/alert.service';
import { AuthenticationService } from 'src/app/fe.services/authentication/authentication.service';
import { EmployeeService } from 'src/app/fe.services/employee/employee.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})

export class HomePageComponent {
    currentUser: any;
    public manageEmployee = {} as Employee;
    public employeeList: Array<EmployeeList> = [];

    admin: number = PositionType.Admin;
    nember: number = PositionType.Nember;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private authenticationService: AuthenticationService,
        private EmployeeService: EmployeeService
    ) { }

    ngOnInit() {
        this.manageEmployee = this.authenticationService.getItemUser();
        if (this.manageEmployee !== undefined && this.manageEmployee !== null) {
            this.getAllEmployeeOfDepartment(this.manageEmployee.id, this.manageEmployee.departmentId);
        }
    }

    btlogout() {
        this.authenticationService.logout();
        this.alertService.success('Logout is successful', true);
        this.router.navigate(['/login']);
    }

    btCreateEmployee() {
        this.router.navigate(['/employee-create']);
    }

    private getAllEmployeeOfDepartment(employeeId: number, departmentId: number) {
        this.EmployeeService.getAllEmployeeOfDepartment(employeeId, departmentId)
            .pipe(first())
            .subscribe(
                data => {
                    this.employeeList = data;
                },
                error => {
                    this.alertService.error(error, true);
                });
    }
}
