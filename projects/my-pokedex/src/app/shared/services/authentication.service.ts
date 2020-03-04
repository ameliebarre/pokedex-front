import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
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
  constructor(private router: Router, private http: HttpClient, private jwtHelperService: JwtHelperService) {}

  /**
   * Signup
   * @param email
   * @param password
   */
  signup(username: string, email: string, password: string): Promise<UserResponse> {
    return this.http
      .post<UserResponse>(`${environment.apiUrl}/auth/signup`, { username, email, password })
      .pipe(
        tap(req => {
          this.storeUserData(req);
          this.router.navigate(['home']);
        })
      )
      .toPromise();
  }

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

  /**
   * Store user profile informations
   * @param {UserResponse} authResult
   * @returns {void}
   */
  storeUserData(authResult: UserResponse): void {
    localStorage.setItem('token', authResult.token);
    localStorage.setItem('user', JSON.stringify(authResult.user));
  }

  /**
   * Check if user is authenticated
   * @returns {boolean}
   */
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    return !this.jwtHelperService.isTokenExpired(token);
  }

  /**
   * Logout from the application and clear localStorage
   */
  logout() {
    localStorage.clear();
    this.router.navigate(['signin']);
  }
}
