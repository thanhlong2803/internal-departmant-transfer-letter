import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertComponent } from './_components/_alert/alert.component';
import { LoadingComponent } from './_components/_loading/loading.component';
import { ConfirmComponent } from './_components/_confirm/confirm.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,

    ConfirmComponent ,
    LoadingComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    RouterModule //Add RouterModule for use <router-outlet></router-outlet> 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
