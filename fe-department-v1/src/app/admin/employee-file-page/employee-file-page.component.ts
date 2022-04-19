import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Login } from 'src/app/fe.data/employee/employee.model';
import { AuthenticationService } from 'src/app/fe.services/authentication/authentication.service';

@Component({
    selector: 'app-employee-file-page',
    templateUrl: './employee-file-page.component.html',
    styleUrls: ['./employee-file-page.component.css']
})

export class EmployeeFilePageComponent {
    constructor() { }

    ngOnInit() {}

}
