import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './admin/home-page/home-page.component';
import { LoginComponent } from './authentication/login/login.component';

const routes: Routes = [ 
  { path: 'login', component: LoginComponent }, //login page 
  { path: '', component: HomePageComponent }, //home page
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
