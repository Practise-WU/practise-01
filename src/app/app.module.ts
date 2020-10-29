import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './view/view.component';
//import { FontAwesomeModule } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
