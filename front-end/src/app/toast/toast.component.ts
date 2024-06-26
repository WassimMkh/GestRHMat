import { Component } from '@angular/core';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  toasts: any[] = [];

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.toastService.toastState.subscribe((toast) => {
      this.toasts.push(toast);
      setTimeout(() => this.removeToast(toast), 3000);
    });
  }

  removeToast(toast : any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }


}
