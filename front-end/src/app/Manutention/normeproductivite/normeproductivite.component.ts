import {Component, OnInit} from '@angular/core';
import {TraficserviceService} from "../../services/traficservice.service";
import {MaintheoriqueService} from "../../services/maintheorique.service";
import {mainTheoriqueRequest} from "../../models/maintheorique-request.model";
import {traficRequest} from "../../models/trafic-request.model";
import {ModeService} from "../../services/mode.service";
import {ModeRequest} from "../../models/mode-request.model";
import {NormeProductiviteService} from "../../services/norme-productivite.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NormeproductRequest} from "../../models/normeproduct-request.model";

@Component({
  selector: 'app-normeproductivite',
  templateUrl: './normeproductivite.component.html',
  styleUrl: './normeproductivite.component.css'
})
export class NormeproductiviteComponent  implements OnInit{

  mainsTheoriques! : Array<mainTheoriqueRequest>;
  trafics! : Array<traficRequest>;
  modes! : Array<ModeRequest>
  normeForm!: FormGroup


  constructor(private traficService : TraficserviceService,
              private mainTheoriqueService : MaintheoriqueService,
              private modeService : ModeService,
              private normeProductiviteService : NormeProductiviteService,
              private fb : FormBuilder) {
  }

  ngOnInit() {
    this.initForm()
    this.getMainTheoriques();
    this.getMode();
  }
  initForm() {
    this.normeForm = this.fb.group({
      mainTheoriqueId: ['', Validators.required],
      traficId: ['', Validators.required],
      modeId: ['', Validators.required],
      norme: [1800, Validators.required],
      sens: ['export', Validators.required],
      suiviProduit: ['shift', Validators.required]
    });
  }
  getMainTheoriques() {
    this.mainTheoriqueService.getMainsTheoriques().subscribe({
      next : value =>{
        this.mainsTheoriques = value;
        if (this.mainsTheoriques.length > 0) {
          this.normeForm.patchValue({
            mainTheoriqueId : this.mainsTheoriques[0].id
          });
          this.fetchTraficNames(this.mainsTheoriques[0].id)
        }
      }
    })
  }

  onMaintheoriqueChange() {
    const selectedMainId = this.normeForm.get('mainTheoriqueId')?.value;
    console.log(selectedMainId)
    if (selectedMainId) {
      this.fetchTraficNames(selectedMainId);
    }
  }

  fetchTraficNames(mainTheoriqueId: number) {

    this.traficService.getTraficName(mainTheoriqueId).subscribe({
      next: value => {
        this.trafics = value;
        if (this.trafics.length > 0) {
          this.normeForm.patchValue({
            traficId : this.trafics[0].id
          })
        }
      },
      error: err => {
        console.error('Error fetching trafics:', err);
      }
    });
  }
  getMode() {
    this.modeService.getMode().subscribe({
      next : value => {
        this.modes = value;
      }
    })
  }

  SaveNormProduct() {
    if (this.normeForm.valid) {
      console.log('Form Submitted', this.normeForm.value);
      // Handle form submission logic
    } else {
      console.error('Form is invalid');
    }
  }

}
