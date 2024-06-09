import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './Administration/authentification/authentification.component';
import {HttpClientModule, provideHttpClient} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
