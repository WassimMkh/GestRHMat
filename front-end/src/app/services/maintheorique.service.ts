import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {mainTheoriqueRequest} from "../models/maintheorique-request.model";

@Injectable({
  providedIn: 'root'
})
export class MaintheoriqueService {
  host : string = "http://localhost:8088"
  constructor(private http : HttpClient) { }

  getMainsTheoriques(): Observable<mainTheoriqueRequest[]> {
    return this.http.get <mainTheoriqueRequest[]>(`${this.host}/maintheorique`)
  }
}
