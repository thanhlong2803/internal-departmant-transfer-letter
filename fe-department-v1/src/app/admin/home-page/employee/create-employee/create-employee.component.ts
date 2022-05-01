import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Employee, EmployeeList, PositionType } from 'src/app/fe.data/employee/employee.model';
import { AlertService } from 'src/app/fe.services/alert.service';
import { AuthenticationService } from 'src/app/fe.services/authentication/authentication.service';
import { EmployeeService } from 'src/app/fe.services/employee/employee.service';

@Component({
    selector: 'app-create-employee',
    templateUrl: './create-employee.component.html',
    styleUrls: ['./create-employee.component.css']
})

export class CreateEmployeeComponent {
    currentUser: any;
    public manageEmployee = {} as Employee;
    public employeeList: Array<EmployeeList> = [];

    admin: number = PositionType.Admin;
    nember: number = PositionType.Nember;

    constructor(
        private router: Router    ) { }

    ngOnInit() {
       
    }
 
    backToList(){
        this.router.navigate(['/']);
    }   
}
