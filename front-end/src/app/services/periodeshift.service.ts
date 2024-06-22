import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PeriodeshiftRequest} from "../models/periodeshift-request";

@Injectable({
  providedIn: 'root'
})
export class PeriodeshiftService {
  host : string = "http://localhost:8088"
  constructor(private http : HttpClient) { }

  getShifts(): Observable<PeriodeshiftRequest> {
    return this.http.get<PeriodeshiftRequest>(`${this.host}/shifts`);
  }
  updateShifts(id: number, ramadanStartDate: string, ramadanEndDate: string){
    return this.http.patch(`${this.host}/shifts/${id}`, {ramadanStartDate : ramadanStartDate,ramadanEndDate : ramadanEndDate},{responseType : "json"});
  }
}
