import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AlertService {

    private subject = new Subject<any>();
    private keepAfterRouteChange = false;

    //Question: What is variable keepAfterRouteChange and when use it will?
    //Answer: keepAfterRouteChange is created to check change message notification.
    //when show displaying message for current page (keepAfterRouteChange = true)
    // only keep for single route change
    // or clear message (keepAfterRouteChange = false)

    constructor(private router: Router) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    this.keepAfterRouteChange = false;
                } else {
                    this.clear();
                }
            }
        });
    }

    //Question: What is Observable and why use it will? 
    //Answer: getAlert() method is created let return observable.    
    //By observable is created to check the stream when data change the same as 
    //subscribing when wherever a change message is received from the subject.next() 
    //passed signal this.subject.asObservable()change message the follow.

    getAlert(): Observable<any> {
        return this.subject.asObservable();
    }

    success(message: string, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'success', text: message });
    }

    error(message: string, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'error', text: message });
    }

    clear() {
        // clear by calling subject.next() without parameters
        this.subject.next();
    }
}