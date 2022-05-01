import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { HomePageComponent } from './employee-list/home-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent},   
  { path: 'employee-create', component: CreateEmployeeComponent},   
  { path: 'employee-create/:id', component: EditEmployeeComponent},
  // { path: 'employee-view/:id', component: HomePageComponent},      
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // children
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
