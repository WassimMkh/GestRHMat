import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {mainTheoriqueRequest} from "../models/maintheorique-request.model";
import {EquipementfamilleRequestModel} from "../models/equipementfamille-request.model";
import {EquipementRequestModel} from "../models/equipement-request.model";
import {AccessoireRequestModel} from "../models/accessoire-request.model";

@Injectable({
  providedIn: 'root'
})
export class MaintheoriqueService {
  host : string = "http://localhost:8088"
  constructor(private http : HttpClient) { }

  getMainsTheoriques(): Observable<mainTheoriqueRequest[]> {
    return this.http.get <mainTheoriqueRequest[]>(`${this.host}/maintheorique`)
  }
  getEquipementFamille() : Observable<EquipementfamilleRequestModel[]>{
    return this.http.get<EquipementfamilleRequestModel[]>(`${this.host}/equipementfamille`)
  }
  getEquipementByEquipementFamille(equipementFamilleId : number)  : Observable<EquipementRequestModel[]>{
    return this.http.get<EquipementRequestModel[]>(`${this.host}/equipementfamille/equipement/${equipementFamilleId}`)
  }
  getAccessoireByEquipementFamille(equipementFamilleId : number)  : Observable<AccessoireRequestModel[]>{
    return this.http.get<AccessoireRequestModel[]>(`${this.host}/equipementfamille/accessoir/${equipementFamilleId}`)
  }
  addMainTheorique(mainTheorique : mainTheoriqueRequest) {
    return this.http.post(`${this.host}/cree-maintheorique`,mainTheorique,{responseType:"json"})
  }
}
