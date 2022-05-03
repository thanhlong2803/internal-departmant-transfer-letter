import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeShareComponent } from '../employee-share/employee-share.component';

@Component({
    selector: 'app-create-employee',
    templateUrl: './create-employee.component.html',
    styleUrls: ['./create-employee.component.css']
})

export class CreateEmployeeComponent {
    @ViewChild("employeeShareComponent") employeeShare!: EmployeeShareComponent;
    constructor(
        private router: Router) { }

    ngOnInit() {

    }

    createEmployee() {
       console.log(this.employeeShare.getShareData());
    }

    backToList() {
        this.router.navigate(['/']);
    }
}
