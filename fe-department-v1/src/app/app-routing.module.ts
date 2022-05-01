import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeModule } from './admin/home-page/employee/employee.module';
import { LoginComponent } from './authentication/login/login.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, //login page 
  // { path: '', component: EmployeeModule, canActivate: [AuthGuard] }, //home page
  {
    path: '',
    loadChildren: () => import('./admin/home-page/employee/employee-routing.module').then(o => o.EmployeeRoutingModule)
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
