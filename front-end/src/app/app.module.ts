import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './Administration/authentification/authentification.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule, HttpHeaders, provideHttpClient} from "@angular/common/http";
import {PeriodeshiftComponent} from "./Manutention/periodeshift/periodeshift.component";
import {ModetravailComponent} from "./Manutention/modetravail/modetravail.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoadingComponent } from './loading/loading.component';
import { NormeproductiviteComponent } from './Manutention/normeproductivite/normeproductivite.component';
import {httpTokenInterceptorInterceptor} from "./Interceptors/http-token-interceptor.interceptor";
import {KeycloakService} from "./services/keycloak.service";
import {NgxPaginationModule} from "ngx-pagination";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {LoadingInterceptorInterceptor} from "./Interceptors/loading-interceptor.interceptor";
import { FooterComponent } from './footer/footer.component';
import {EquipeComponent} from "./Manutention/equipe/equipe.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {ManutentionComponent} from "./Manutention/manutention.component";
import { PlanDeRoulementComponent } from './Manutention/planderoulement/planderoulement.component';
import { MaintheoriqueComponent } from './Manutention/maintheorique/maintheorique.component';
import { AdminComponent } from './admin/admin.component';
import { ToastComponent } from './toast/toast.component';

import {ToastrModule} from "ngx-toastr";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    FooterComponent,
    PeriodeshiftComponent,
    EquipeComponent,
    NavbarComponent,
    ManutentionComponent,
    PlanDeRoulementComponent,
    MaintheoriqueComponent,
    AdminComponent,
    ToastComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      preventDuplicates : true,
      positionClass : 'toast-bottom-right',
      timeOut : 100000,
      progressBar : true
    }),
  ],
    providers: [
      HttpClient,
      {
        provide : APP_INITIALIZER,
        deps : [KeycloakService],
        useFactory : kcFactory,
        multi : true
      },
      provideAnimationsAsync(),
      {
        provide : HTTP_INTERCEPTORS,
        useClass : LoadingInterceptorInterceptor,
        multi : true
      }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
