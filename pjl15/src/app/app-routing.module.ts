import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VarComponent } from './var/var.component';
import { IntroComponent } from './intro/intro.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';
import { ObjFormsComponent } from './obj-forms/obj-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ApisComponent } from './apis/apis.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { MaterialComponent } from './material/material.component';
import { ObsComponent } from './obs/obs.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"var", component: VarComponent},
  {path:"intro", component: IntroComponent},
  {path:"dir", component: DirectivesComponent},
  {path:"forms", component: FormsComponent},
  {path:"obj-forms", component: ObjFormsComponent},
  {path:"reactive-forms", component: ReactiveFormsComponent},
  {path:"pipes", component: PipesComponent},
  {path:"life/:id/:name", component: LifeCycleComponent},
  {path:":name/p/:id", component: LifeCycleComponent},
  {path:"apis", component: ApisComponent},
  {path:"bootstrap", component: BootstrapComponent},
  {path:"material", component: MaterialComponent},
  {path:"obs", component: ObsComponent},
  {path:"**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
