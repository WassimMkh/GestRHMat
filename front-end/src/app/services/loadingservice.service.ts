import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingserviceService {

  private count = 0;
  private loader$ = new BehaviorSubject<String>("");
  constructor() { }

  getLoaderObserver() : Observable<String> {
    return this.loader$.asObservable();
  }

  requestStarted() {
    if(++this.count==1) {
      this.loader$.next("start");
    }
  }

  requestEnded()  {
    if(this.count == 0 || --this.count == 0) {
      this.loader$.next("stop");
    }
  }

  resetLoader() {
    this.count = 0;
    this.loader$.next("stop");
  }
}
