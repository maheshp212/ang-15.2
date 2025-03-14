import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VarComponent } from './var/var.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';
import { ObjFormsComponent } from './obj-forms/obj-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { ApisComponent } from './apis/apis.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ObsComponent } from './obs/obs.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"intro", component:IntroComponent},
  {path:"var", component:VarComponent},
  {path:"dir", component:DirectivesComponent},
  {path:"forms", component:FormsComponent},
  {path:"obj-forms", component:ObjFormsComponent},
  {path:"reactive-forms", component:ReactiveFormsComponent},
  {path:"pipes", component:PipesComponent},
  {path:"apis", component:ApisComponent},
  {path:"life-cycle", component:LifeCycleComponent},
  {path:"obs", component:ObsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
