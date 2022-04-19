import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Login } from 'src/app/fe.data/employee/employee.model';
import { AuthenticationService } from 'src/app/fe.services/authentication/authentication.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})

export class HomePageComponent {
    currentUser: any;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {  
        
    }

    ngOnInit() { }

    btlogout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
