import {Component, OnInit} from '@angular/core';
import {TraficserviceService} from "../../services/traficservice.service";
import {MaintheoriqueService} from "../../services/maintheorique.service";
import {mainTheoriqueRequest} from "../../models/maintheorique-request.model";
import {traficRequest} from "../../models/trafic-request.model";

@Component({
  selector: 'app-normeproductivite',
  templateUrl: './normeproductivite.component.html',
  styleUrl: './normeproductivite.component.css'
})
export class NormeproductiviteComponent  implements OnInit{

  mainsTheoriques! : Array<mainTheoriqueRequest>;
  selectedMainId: any;
  trafics! : Array<traficRequest>;

  constructor(private traficService : TraficserviceService, private mainTheoriqueService : MaintheoriqueService) {
  }

  ngOnInit() {
    this.getMainTheoriques();
  }

  getMainTheoriques() {
    this.mainTheoriqueService.getMainsTheoriques().subscribe({
      next : value =>{
        this.mainsTheoriques = value;
        if (this.mainsTheoriques.length > 0) {
          this.selectedMainId = this.mainsTheoriques[0].nom;
          this.fetchTraficNames(this.selectedMainId);
        }
      }
    })
  }

  onMaintheoriqueChange() {
    if (this.selectedMainId) {
      this.fetchTraficNames(this.selectedMainId);
    }
  }
  fetchTraficNames(mainTheoriqueName: string) {
    this.traficService.getTraficName(mainTheoriqueName).subscribe({
      next: value => {
        this.trafics = value;
        console.log('Trafic Names:', this.trafics);
      },
      error: err => {
        console.error('Error fetching trafics:', err);
      }
    });
  }
}
