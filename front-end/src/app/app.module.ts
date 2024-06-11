import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './Administration/authentification/authentification.component';
import {HttpClientModule, provideHttpClient} from "@angular/common/http";
import {PeriodeshiftComponent} from "./Manutention/periodeshift/periodeshift.component";
import {ModetravailComponent} from "./Manutention/modetravail/modetravail.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoadingComponent } from './loading/loading.component';
import { NormeproductiviteComponent } from './Manutention/normeproductivite/normeproductivite.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    ModetravailComponent,
    LoadingComponent,
    NormeproductiviteComponent,
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
