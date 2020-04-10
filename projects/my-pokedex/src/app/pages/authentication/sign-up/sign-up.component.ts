import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from 'projects/my-pokedex/src/app/shared/helpers/must-match.validator';

@Component({
  selector: 'px-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./../authentication.component.scss']
})
export class SignUpComponent implements OnInit {
  public registerForm: FormGroup;
  public submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createFormGroup();
  }

  createFormGroup() {
    this.registerForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        firstname: ['', Validators.required],
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      },
      {
        validator: MustMatch('password', 'confirmPassword')
      }
    );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
  }
}
