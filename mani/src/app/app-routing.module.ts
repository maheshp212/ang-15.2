import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VarComponent } from './var/var.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';
import { ObjFormsComponent } from './obj-forms/obj-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"intro", component:IntroComponent},
  {path:"var", component:VarComponent},
  {path:"dir", component:DirectivesComponent},
  {path:"forms", component:FormsComponent},
  {path:"obj-forms", component:ObjFormsComponent},
  {path:"reactive-forms", component:ReactiveFormsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
