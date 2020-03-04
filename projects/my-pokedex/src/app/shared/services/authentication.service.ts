import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

interface UserResponse {
  user: any;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private router: Router, private http: HttpClient) {}

  /**
   * Signin
   * @param email
   * @param password
   */
  signin(email: string, password: string): Promise<UserResponse> {
    return this.http
      .post<UserResponse>(`${environment.apiUrl}/auth/signin`, { email, password })
      .pipe(
        tap(req => {
          this.storeUserData(req);
          this.router.navigate(['home']);
        })
      )
      .toPromise();
  }

  storeUserData(authResult: any) {
    localStorage.setItem('token', authResult.token);
    localStorage.setItem('user', JSON.stringify(authResult.user));
  }
}
