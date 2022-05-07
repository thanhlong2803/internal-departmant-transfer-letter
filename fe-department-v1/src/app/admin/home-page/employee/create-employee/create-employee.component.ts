import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/fe.services/alert.service';
import { EmployeeShareComponent } from '../employee-share/employee-share.component';
import { EmployeeService } from 'src/app/fe.services/employee/employee.service';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-create-employee',
    templateUrl: './create-employee.component.html',
    styleUrls: ['./create-employee.component.css']
})

export class CreateEmployeeComponent {
    @ViewChild("employeeShareComponent") employeeShare!: EmployeeShareComponent;
    constructor(
        private alertService: AlertService,
        private router: Router,
        private EmployeeService: EmployeeService) { }

    ngOnInit() {

    }

    createEmployee() {       
        this.EmployeeService.CreateEmployee(this.employeeShare.getShareData())
            .pipe(first())
            .subscribe(data => {
                this.alertService.success('Create is employee successful', true);
                this.router.navigate(['/']);
            },
            error => {
                this.alertService.error(error, true);
            });
    }

    backToList() {
        this.router.navigate(['/']);
    }
}
