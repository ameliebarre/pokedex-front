import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from 'projects/my-pokedex/src/app/shared/services/authentication.service';

@Component({
  selector: 'px-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./../authentication.component.scss']
})
export class SignInComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted = false;

  constructor(private authService: AuthenticationService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.isAUthenticated();
    this.createFormGroup();
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
  createFormGroup(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value));
  }
}
