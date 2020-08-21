import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  registrationForm: FormGroup;
  showError: boolean;
  getData: any;
  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService,
    private router: Router) { }

  ngOnInit() {
    this.getData = this.appService.getFormModel();
    if (this.getData === undefined) {
      this.registrationForm = this.formBuilder.group({
        name: ['', Validators.required],
        age: ['', Validators.required],
        email: ['', Validators.required],
        gender: ['', Validators.required],
        qualification: ['', Validators.required]
      });
    } else {
      this.showError = false;
      this.registrationForm = this.formBuilder.group({
        name: this.getData.name,
        age: this.getData.age,
        email: this.getData.email,
        gender: this.getData.gender,
        qualification: this.getData.qualification
      });
    }
  }

  downloadJson() {
    try {
      if (this.registrationForm.status !== 'INVALID') {
        const obj = this.registrationForm.value;
        this.appService.downloadJson(obj);
        this.showError = false;
      } else {
        this.showError = true;
      }
    } catch (exception) {
      this.showError = true;
    }
  }

  navigation() {
    if (this.registrationForm.status !== 'INVALID') {
      this.getData = this.registrationForm.value;
      this.appService.setFormModel(this.getData);
      this.router.navigate(['addcomponent']);
    } else {
      this.showError = true;
    }
  }
}
