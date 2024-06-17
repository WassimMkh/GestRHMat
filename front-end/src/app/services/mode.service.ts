import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ModeRequest} from "../models/mode-request.model";

@Injectable({
  providedIn: 'root'
})
export class ModeService {
  host : string = "http://localhost:8088"
  constructor(private http : HttpClient) { }

  getMode(): Observable<ModeRequest[]> {
    return this.http.get<ModeRequest[]>(`${this.host}/modes`);
  }
}
