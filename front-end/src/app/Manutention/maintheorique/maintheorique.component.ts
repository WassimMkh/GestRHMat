import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MaintheoriqueService} from "../../services/maintheorique.service";
import {TraficserviceService} from "../../services/traficservice.service";
import {TypetraficService} from "../../services/typetrafic.service";
import {TypetraficRequestModel} from "../../models/typetrafic-request.model";
import {EquipementfamilleRequestModel} from "../../models/equipementfamille-request.model";
import {EquipementRequestModel} from "../../models/equipement-request.model";
import {AccessoireRequestModel} from "../../models/accessoire-request.model";
import {traficRequest} from "../../models/trafic-request.model";
import {mainTheoriqueRequest} from "../../models/maintheorique-request.model";

@Component({
  selector: 'app-maintheorique',
  templateUrl: './maintheorique.component.html',
  styleUrl: './maintheorique.component.css'
})
export class MaintheoriqueComponent implements OnInit{
  selectedTab = 'form';
  mainTheoriqueForm!: FormGroup;
  formSubmitted: boolean = false;
  typeTrafics!: TypetraficRequestModel[];
  trafics!: traficRequest[];
  equipementFamille!: EquipementfamilleRequestModel[];
  equipementsList: EquipementRequestModel[][] = [[]];
  accessoiresList: AccessoireRequestModel[][] = [[]];

  constructor(
    private fb: FormBuilder,
    private mainTheoriqueService: MaintheoriqueService,
    private traficService: TraficserviceService,
    private typeTraficService: TypetraficService
  ) { }

  ngOnInit() {
    this.initForm();
    this.getTypeTrafic();
    this.getEquipementFamille();
  }

  initForm() {
    this.mainTheoriqueForm = this.fb.group({
      nomMain: ['', Validators.required],
      typeTrafic: ['', Validators.required],
      trafic: ['', Validators.required],
      equipements: this.fb.array([this.createEquipementFormGroup()])
    });

    this.mainTheoriqueForm.get('typeTrafic')?.valueChanges.subscribe(value => {
      this.getTraficsByTypeTrafic(value);
    });

    this.setupEquipementValueChanges(0);
  }

  createEquipementFormGroup(): FormGroup {
    return this.fb.group({
      equipementFamille: ['', Validators.required],
      equipement: ['', Validators.required],
      accessoire: ['', Validators.required]
    });
  }

  addEquipement() {
    const equipementsArray = this.equipements;
    equipementsArray.push(this.createEquipementFormGroup());
    this.equipementsList.push([]);
    this.accessoiresList.push([]);

    const newIndex = equipementsArray.length - 1;
    this.setupEquipementValueChanges(newIndex);
  }

  setupEquipementValueChanges(index: number) {
    const equipementsArray = this.equipements;
    equipementsArray.at(index).get('equipementFamille')?.valueChanges.subscribe(value => {
      this.getEquipementByEquipementFamille(value, index);
      this.getAccessoireByEquipementFamille(value, index);
    });
  }

  get equipements() {
    return this.mainTheoriqueForm.get('equipements') as FormArray;
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  onSubmit() {
    if (this.mainTheoriqueForm.valid) {
      const formValues = this.mainTheoriqueForm.value;
      const mainTheorique: mainTheoriqueRequest = {
        id : 0,
        nom: formValues.nomMain,
        typeTraficIds: +formValues.typeTrafic,
        traficIdstraficIds: [+formValues.trafic],
        equipementFamilleIds: formValues.equipements.map((equip: any) => +equip.equipementFamille),
        equipementIds: formValues.equipements.map((equip: any) => +equip.equipement),
        accessoireIds: formValues.equipements.map((equip: any) => +equip.accessoire)
      };
      this.mainTheoriqueService.addMainTheorique(mainTheorique).subscribe({
        next : value => {
          console.log('Main Théorique added successfully', value);
          this.formSubmitted = true;
          this.onCancel();  // Reset the form
        }, error: err => {
          console.error('Error adding Main Théorique', err);
          // Optionally show an error message to the user
        }
      })
    }
  }

  onCancel() {
    this.mainTheoriqueForm.reset();
    this.formSubmitted = false;
  }

  isFormInvalid() {
    return this.mainTheoriqueForm.invalid;
  }

  getTypeTrafic() {
    this.typeTraficService.getTypeTrafic().subscribe({
      next: value => {
        this.typeTrafics = value;
      }
    });
  }

  getTraficsByTypeTrafic(typeTraficId: number) {
    this.traficService.getTraficByTypeTrafic(typeTraficId).subscribe({
      next: value => {
        this.trafics = value;
      }
    });
  }

  getEquipementFamille() {
    this.mainTheoriqueService.getEquipementFamille().subscribe({
      next: value => {
        this.equipementFamille = value;
      }
    });
  }

  getEquipementByEquipementFamille(equipementFamilleId: number, index: number) {
    this.mainTheoriqueService.getEquipementByEquipementFamille(equipementFamilleId).subscribe({
      next: value => {
        this.equipementsList[index] = value;
      }
    });
  }

  getAccessoireByEquipementFamille(equipementFamilleId: number, index: number) {
    this.mainTheoriqueService.getAccessoireByEquipementFamille(equipementFamilleId).subscribe({
      next: value => {
        this.accessoiresList[index] = value;
      }
    });
  }
}
