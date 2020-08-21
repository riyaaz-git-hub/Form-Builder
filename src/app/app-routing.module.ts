import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { AddFormComponent } from './add-form/add-form.component';

const routes: Routes = [
  { path: '', component: RegistrationFormComponent },
  { path: 'addcomponent', component: AddFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegistrationFormComponent, AddFormComponent];
