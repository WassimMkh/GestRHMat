import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ShiftplanRequestModel} from "../models/shiftplan-request.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShiftplanService {
  host : string = "http://localhost:8088"
  constructor(private http : HttpClient) { }

  addShiftPlan(shiftPlan : ShiftplanRequestModel) {
    return this.http.post(`${this.host}/cree-shiftPlan`,shiftPlan, {responseType : "json"})
  }
  updateShiftPlan(id : number,shiftPlan : ShiftplanRequestModel) {
    return this.http.put(`${this.host}/shiftplan/${id}`,shiftPlan,{responseType : "json"});
  }
  checkShiftPlanExists(equipeId: number): Observable<any> {
    return this.http.get(`${this.host}/exist/${equipeId}`, { responseType: 'json' });
  }
}
