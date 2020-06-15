import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {SiteUser} from './data-classes';
import {URL_ROOT} from './globals';
import {Observable} from 'rxjs';

const URL_REGISTER = URL_ROOT + '/api/register/';

@Injectable({
  providedIn: 'root'
})
export class BoilerAppApiService {
  private currentUser: SiteUser;
  constructor(
    private http: HttpClient,
  ) {
    this.currentUser = null;
  }

  registerUser(newUser: SiteUser): Observable<any> {
    return this.http.post(URL_REGISTER, {
      password: newUser.password,
      email: newUser.email,
      first_name: newUser.firstName,
      last_name: newUser.lastName,
      city: newUser.city,
      color: newUser.color
    });
  }
}
