import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NormeproductRequest} from "../models/normeproduct-request.model";
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class NormeProductiviteService {
  host : string = "http://localhost:8088"

  constructor(private http: HttpClient) { }

  addNormeProductivite(normeProductivite : NormeproductRequest): Observable<NormeproductRequest> {
    return this.http.post<NormeproductRequest>(`${this.host}/cree-normeproductivite`,normeProductivite,{responseType : "json"})
  }
  getNormeProductivite() : Observable<NormeproductRequest[]> {
    return this.http.get<NormeproductRequest[]>(`${this.host}/norme_productivite`);
  }
  deleteNormeProductivite(normeProductiviteId : number) {
    return this.http.delete(`${this.host}/norme-productivite/${normeProductiviteId}`);
  }
  updateNormeProductivite(normeProductiviteId : number, normeProductivite : NormeproductRequest): Observable<NormeproductRequest> {
    return this.http.put<NormeproductRequest>(`${this.host}/norme-productivite/${normeProductiviteId}`,normeProductivite,{responseType : "json"})
  }
}
