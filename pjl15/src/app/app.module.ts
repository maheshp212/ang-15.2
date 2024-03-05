import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VarComponent } from './var/var.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
// components -- page / block
// directives -- custome html attribute
// pipes -- text transformation
// services -- common logics / api calls
// modules
@NgModule({
  declarations: [ // component, directive , pipe
    AppComponent,
    HomeComponent,
    IntroComponent,
    VarComponent,
    DirectivesComponent,
    FormsComponent
  ],
  imports: [ // module
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [], // service
  bootstrap: [AppComponent]
})
export class AppModule { }
