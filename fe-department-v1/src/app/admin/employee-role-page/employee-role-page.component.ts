import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Login } from 'src/app/fe.data/employee/employee.model';
import { AuthenticationService } from 'src/app/fe.services/authentication/authentication.service';

@Component({
    selector: 'app-employee-role-page',
    templateUrl: './employee-role-page.component.html',
    styleUrls: ['./employee-role-page.component.css']
})

export class EmployeeRolePageComponent {
    
    constructor() { }

    ngOnInit() { } 
}
