import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VarComponent } from './var/var.component';
import { IntroComponent } from './intro/intro.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"var", component: VarComponent},
  {path:"intro", component: IntroComponent},
  {path:"dir", component: DirectivesComponent},
  {path:"forms", component: FormsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
