import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from "./Administration/authentification/authentification.component";
import { NormeproductiviteComponent } from "./Manutention/normeproductivite/normeproductivite.component";
import { ModetravailComponent } from "./Manutention/modetravail/modetravail.component";
import { PeriodeshiftComponent } from "./Manutention/periodeshift/periodeshift.component";
import { EquipeComponent } from "./Manutention/equipe/equipe.component";
import { ManutentionComponent } from "./Manutention/manutention.component";
import {PlanDeRoulementComponent} from "./Manutention/planderoulement/planderoulement.component";
import {AdminComponent} from "./admin/admin.component";

const routes: Routes = [
  { path: "", redirectTo: "authentification", pathMatch: "full" },
  { path: "authentification", component: AuthentificationComponent },
  {path:"hhhh",component:AdminComponent},
  {
    path: "manutention", component: ManutentionComponent,
    children: [
      { path: "normeproduc", component: NormeproductiviteComponent },
      { path: "modeTravail", component: ModetravailComponent },
      { path: "periodeShift", component: PeriodeshiftComponent },
      { path: "equipe", component: EquipeComponent },
      { path:"planderoulement",component : PlanDeRoulementComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
