import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NormeproductRequest} from "../models/normeproduct-request.model";



@Injectable({
  providedIn: 'root'
})
export class NormeProductiviteService {
  host : string = "http://localhost:8088"

  constructor(private http: HttpClient) { }

  addNormeProductivite(normeProductivite : NormeproductRequest) {
    return this.http.post(`${this.host}/cree-normeproductivite`,normeProductivite)
  }
}
