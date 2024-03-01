import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VarComponent } from './var/var.component';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"var", component: VarComponent},
  {path:"intro", component: IntroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
