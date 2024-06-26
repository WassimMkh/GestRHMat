import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastSubject = new Subject<any>();
  toastState = this.toastSubject.asObservable();
  constructor() { }

  showSuccess(message: string) {
    this.showToast(message, 'success');
  }

  showError(message: string) {
    this.showToast(message, 'error');
  }

  showInvalid(message: string) {
    this.showToast(message, 'invalid');
  }

  private showToast(message: string, type: string) {
    this.toastSubject.next({ message, type });
  }

}
