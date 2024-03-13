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

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"var", component: VarComponent},
  {path:"intro", component: IntroComponent},
  {path:"dir", component: DirectivesComponent},
  {path:"forms", component: FormsComponent},
  {path:"obj-forms", component: ObjFormsComponent},
  {path:"reactive-forms", component: ReactiveFormsComponent},
  {path:"pipes", component: PipesComponent},
  {path:"life", component: LifeCycleComponent},
  {path:"apis", component: ApisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
