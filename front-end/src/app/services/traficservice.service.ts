import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {traficRequest} from "../models/trafic-request.model";

@Injectable({
  providedIn: 'root'
})
export class TraficserviceService {
  host : string = "http://localhost:8088"
  constructor(private http:HttpClient) { }

  getTraficName(mainId : number) : Observable<traficRequest[]> {
    return this.http.get<traficRequest[]>(`${this.host}/maintheorique/${mainId}`);
  }
}
