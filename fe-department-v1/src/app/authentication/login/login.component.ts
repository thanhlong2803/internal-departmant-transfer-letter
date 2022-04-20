import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Login } from 'src/app/fe.data/employee/employee.model';
import { AlertService } from 'src/app/fe.services/alert.service';
import { AuthenticationService } from 'src/app/fe.services/authentication/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    login: Login = new Login;
    loading: boolean = false;
    returnUrl: string | undefined;

    constructor(private authenticationService: AuthenticationService,private alertService: AlertService,
        private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit() { this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'; }

    btLogin() {
        this.loading = true;
        this.authenticationService.login(this.login.email, this.login.password)
            .pipe(first())
            .subscribe(
                data => {               
                    this.alertService.success('Login is successful', true);    
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error, true);
                    this.loading = false;
                });
    }
}
