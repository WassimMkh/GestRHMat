import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ModeTravailRequest} from "../models/modetravail-request.model";

@Injectable({
  providedIn: 'root'
})
export class ModetravailService {
  host : string = "http://localhost:8088"
  constructor(private http : HttpClient) { }

  getModeDeTravail() : Observable<ModeTravailRequest[]>{
    return this.http.get<ModeTravailRequest[]>(`${this.host}/modedetravail`)
  }
}
