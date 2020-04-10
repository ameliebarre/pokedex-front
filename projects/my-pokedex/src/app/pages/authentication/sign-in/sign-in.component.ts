import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'projects/my-pokedex/src/app/shared/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'px-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./../authentication.component.scss']
})
export class SignInComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private authService: AuthenticationService, private router: Router) {
    this.loginForm = this.createFormGroup();
  }

  ngOnInit(): void {
    this.isAUthenticated();
  }

  /**
   * Check if user is authenticated and redirect to homepage if true
   * @returns {void}
   */
  isAUthenticated(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['home']);
    }
  }

  /**
   * Set up login form
   * @returns {void}
   */
  createFormGroup(): FormGroup {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    // Login and redirect to homepage
    console.log('submit form');
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
