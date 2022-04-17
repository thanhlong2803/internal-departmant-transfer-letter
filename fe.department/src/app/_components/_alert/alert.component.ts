import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/_services/alert.service';


@Component(
    {
        selector: 'alert',
        templateUrl: 'alert.component.html'
    }
)
export class AlertComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    message: any;

    constructor(private alertService: AlertService) {

    }

    ngOnInit() {
        //getAlert() passed signal this.subject.asObservable() 
        //so per change it will subscription save to memory..... esay => memory leaks
        this.subscription = this.alertService.getAlert()
            .subscribe(message => {               
                switch (message && message.type) {
                    case 'success':
                        message.cssClass = 'alert alert-success';
                        break;
                    case 'warning':
                        message.cssClass = 'alert alert-warning';
                        break;
                    case 'error':
                        message.cssClass = 'alert alert-danger';
                        break;
                }
                this.message = message;
            });
    }

    ngOnDestroy() {
        //unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
}