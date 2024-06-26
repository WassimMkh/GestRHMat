import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EquipeRequestModel} from "../models/equipe-request.model";
import {EmployeRequestModel} from "../models/employe-request.model";

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  host : string = "http://localhost:8088"
  constructor(private http : HttpClient) { }

  getFonctions() : Observable<string[]> {
    return this.http.get<string[]>(`${this.host}/fonctions`);
  }
  getEmployesByFonction(fonction : string) : Observable<EmployeRequestModel[]>{
    return this.http.get<EmployeRequestModel[]>(`${this.host}/employes/by-fonction/${fonction}`)
  }
  addEquipe(equipe : EquipeRequestModel) : Observable<EquipeRequestModel>{
    return this.http.post<EquipeRequestModel>(`${this.host}/cree-equipe`,equipe,{responseType : "json"})
  }
  getEquipes() : Observable<EquipeRequestModel[]>{
    return this.http.get<EquipeRequestModel[]>(`${this.host}/equipes`)
  }
  checkEquipeNom(equipeNom : string) : Observable<Boolean>{
    return this.http.get<Boolean>(`${this.host}/equipes/${equipeNom}`,{responseType : "json"});
  }

}
