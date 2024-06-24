import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TypetraficRequestModel} from "../models/typetrafic-request.model";

@Injectable({
  providedIn: 'root'
})
export class TypetraficService {
  host : string = "http://localhost:8088"
  constructor(private http : HttpClient) { }

  getTypeTrafic() : Observable<TypetraficRequestModel[]>{
    return this.http.get<TypetraficRequestModel[]>(`${this.host}/typetrafic`);
  }
}
