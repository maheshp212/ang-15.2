import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VarComponent } from './var/var.component';
import { DirectivesComponent } from './directives/directives.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"intro", component:IntroComponent},
  {path:"var", component:VarComponent},
  {path:"dir", component:DirectivesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
