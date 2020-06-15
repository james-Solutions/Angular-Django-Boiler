import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SiteUser} from '../../data-classes';
import {BoilerAppApiService} from '../../boiler-app-api.service';


@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.css']
})
export class RegisterScreenComponent implements OnInit {
  newUser = new SiteUser();
  errorMessage = '';
  passwordVerify = '';
  constructor(private router: Router,
              private apiService: BoilerAppApiService)
  {  }

  ngOnInit(): void {
  }

  register() {
    // Perform API call to register here
    console.log('Register!');
    console.log(this.newUser);
    // TODO: client-side password verification
    /*this.apiService.registerUser(this.newUser).subscribe(
      data => {
        this.authService.login({username: this.newUser.email, password: this.newUser.password}).subscribe(
          () => {
            // This is the success function, so that means we should redirect to /home
            this.router.navigate(['/home']);
          }, () => {
            // This is the error function and means that the authentication failed
            // TODO: Treat invalid credentials differently from a network problem
          }
        );
      }, error => {
        if (error.error.email && error.error.email === 'This field must be unique.') {
          this.errorMessage = 'That email address is already in use';
        } else {
          console.log(error.error);
          this.errorMessage = 'There is an error in your form. Please try again.';
        }
      }
    );*/
  }
}
