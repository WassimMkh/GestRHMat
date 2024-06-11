import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TraficserviceService {
  host : string = "http://localhost:8085/"
  constructor(private http:HttpClient) { }

}
