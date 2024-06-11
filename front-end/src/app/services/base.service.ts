import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BaseService {
    readonly API_URL="http://localhost:5432"
    readonly ENDPOINT_PERSON="/mydb"
  constructor(private HttpClient:HttpClient) { }
  login(){
      return this.HttpClient.get(this.API_URL+this.ENDPOINT_PERSON)
  }
}
