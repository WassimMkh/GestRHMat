import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ShiftplanRequestModel} from "../models/shiftplan-request.model";

@Injectable({
  providedIn: 'root'
})
export class ShiftplanService {
  host : string = "http://localhost:8088"
  constructor(private http : HttpClient) { }

  addShiftPlan(shiftPlan : ShiftplanRequestModel) {
    return this.http.post(`${this.host}/cree-shiftPlan`,shiftPlan, {responseType : "json"})
  }
}
