import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VarComponent } from './var/var.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { ObjFormsComponent } from './obj-forms/obj-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { HexaPipe } from './hexa.pipe';
import { ParamsPipe } from './params.pipe';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ApisComponent } from './apis/apis.component';
import {HttpClientModule} from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomComponent } from './custom/custom.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogOverviewExampleDialog, MaterialComponent } from './material/material.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from './material.module';
import { MatNativeDateModule } from '@angular/material/core';
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
    FormsComponent,
    ObjFormsComponent,
    ReactiveFormsComponent,
    PipesComponent,
    HexaPipe,
    ParamsPipe,
    LifeCycleComponent,
    ApisComponent,
    NotFoundComponent,
    CustomComponent,
    UsersListComponent,
    UserInfoComponent,
    MaterialComponent,
    BootstrapComponent,
    DialogOverviewExampleDialog
  ],
  imports: [ // module
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    MatNativeDateModule,
  ],
  providers: [], // service
  bootstrap: [AppComponent]
})
export class AppModule { }
