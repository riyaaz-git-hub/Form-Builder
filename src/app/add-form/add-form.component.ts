import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { RegistrationForm } from '../Form.model';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  formData: RegistrationForm;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.formData = this.appService.getFormModel();
  }

}
