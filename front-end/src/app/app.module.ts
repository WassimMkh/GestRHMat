import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './Administration/authentification/authentification.component';
import {HttpClientModule, provideHttpClient} from "@angular/common/http";
import {PeriodeshiftComponent} from "./Manutention/periodeshift/periodeshift.component";
import {ModetravailComponent} from "./Manutention/modetravail/modetravail.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    ModetravailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
