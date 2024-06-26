import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EmployeRequestModel} from "../models/employe-request.model";
import {EquipeRequestModel} from "../models/equipe-request.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  host : string = "http://localhost:8088"
  constructor(private http : HttpClient) { }

  getEmploye() : Observable<EmployeRequestModel[]> {
    return this.http.get<EmployeRequestModel[]>(`${this.host}/employes`);
  }
  addEmploye(employe : EquipeRequestModel) {
    return this.http.post(`${this.host}/cree_employe`,employe);
  }
  updateEmploye(employeId : number,employe : EmployeRequestModel) {
    return this.http.put(`${this.host}/employes/${employeId}`,employe)
  }
  deleteEmploye(employeId : number) {
    return this.http.delete(`${this.host}/employes/delete/${employeId}`);
  }
}
