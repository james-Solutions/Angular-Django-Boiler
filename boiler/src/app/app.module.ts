import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Site/home/home.component';
import { NotFoundComponent } from './Site/not-found/not-found.component';
import { NewsComponent } from './Site/news/news.component';
import { LogoutComponent } from './user-management/logout/logout.component';
import { ProfileScreenComponent } from './user-management/profile-screen/profile-screen.component';
import { RegisterScreenComponent } from './user-management/register-screen/register-screen.component';
import { LoginComponent } from './user-management/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    NewsComponent,
    LogoutComponent,
    ProfileScreenComponent,
    RegisterScreenComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
