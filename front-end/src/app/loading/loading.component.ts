import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {LoadingserviceService} from "../services/loadingservice.service";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  showLoader = false;
  constructor(private loadingservice : LoadingserviceService,private cdRef : ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.loadingservice.getLoaderObserver().subscribe((status) => {
      this.showLoader = status == "start";
      this.cdRef.detectChanges();
    });
  }
}
