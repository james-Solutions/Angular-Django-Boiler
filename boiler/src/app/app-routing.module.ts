import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './Site/home/home.component';
import {NotFoundComponent} from './Site/not-found/not-found.component';
import {RegisterScreenComponent} from './user-management/register-screen/register-screen.component';
import {LoginComponent} from './user-management/login/login.component';
import {LogoutComponent} from './user-management/logout/logout.component';
import {ProfileScreenComponent} from './user-management/profile-screen/profile-screen.component';


const routes: Routes = [
  { path: '',   redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: HomeComponent},
  {path: 'user/register', component: RegisterScreenComponent },
  {path: 'user/profile', component: ProfileScreenComponent },
  {path: 'user/login', component: LoginComponent },
  {path: 'user/logout', component: LogoutComponent },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
