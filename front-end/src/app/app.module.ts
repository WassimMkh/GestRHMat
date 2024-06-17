import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './Administration/authentification/authentification.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule, provideHttpClient} from "@angular/common/http";
import {PeriodeshiftComponent} from "./Manutention/periodeshift/periodeshift.component";
import {ModetravailComponent} from "./Manutention/modetravail/modetravail.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoadingComponent } from './loading/loading.component';
import { NormeproductiviteComponent } from './Manutention/normeproductivite/normeproductivite.component';
import {httpTokenInterceptorInterceptor} from "./Interceptors/http-token-interceptor.interceptor";
import {KeycloakService} from "./services/keycloak.service";
export function kcFactory(kcService : KeycloakService)  {
  return () => kcService.init();
}
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
    providers: [
      HttpClient,
      {
        provide : APP_INITIALIZER,
        deps : [KeycloakService],
        useFactory : kcFactory,
        multi : true
      }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
