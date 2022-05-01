import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { HomePageComponent } from './employee-list/home-page.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeShareComponent } from './employee-share/employee-share.component';

@NgModule({
  declarations: [
    HomePageComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    EmployeeShareComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    EmployeeRoutingModule
  ],
})
export class EmployeeModule { }
