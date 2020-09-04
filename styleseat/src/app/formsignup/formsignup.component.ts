import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-formsignup',
  templateUrl: './formsignup.component.html',
  styleUrls: ['./formsignup.component.css']
})
export class FormsignupComponent implements OnInit {

  signupForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle( "Sign Up Form | StyleSheet");
    this.signupForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        acceptTerms: [false, Validators.requiredTrue]
    });
  }

  get f() { return this.signupForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.signupForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signupForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.signupForm.reset();
  }

}
