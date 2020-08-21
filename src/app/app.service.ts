import { Injectable } from '@angular/core';
import { RegistrationForm } from './Form.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  registrationForm: RegistrationForm;
  constructor() { }

  setFormModel(model: RegistrationForm) {
    this.registrationForm = model;
  }

  getFormModel(): RegistrationForm {
    return this.registrationForm;
  }

  downloadJson(formData) {
    const obj = formData;
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(obj));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', dataStr);
    downloadAnchorNode.setAttribute('download', 'data.json');
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }
}
