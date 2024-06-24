import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {EquipeService} from "../../services/equipe.service";
import {EquipeRequestModel} from "../../models/equipe-request.model";
import {ModeTravailRequest} from "../../models/modetravail-request.model";
import {ModetravailService} from "../../services/modetravail.service";
import {ShiftplanService} from "../../services/shiftplan.service";
import {ShiftplanRequestModel} from "../../models/shiftplan-request.model";

@Component({
  selector: 'app-planderoulement',
  templateUrl: './planderoulement.component.html',
  styleUrls: ['./planderoulement.component.css']
})
export class PlanDeRoulementComponent implements OnInit {
  planDeRoulementForm!: FormGroup;
  formSubmitted: boolean = false;
  equipes: EquipeRequestModel[] = [];
  modeTravail: ModeTravailRequest[] = [];

  constructor(
    private fb: FormBuilder,
    private equipeService: EquipeService,
    private modeTravailService: ModetravailService,
    private shiftPlanService : ShiftplanService
  ) {}

  ngOnInit(): void {
    this.planDeRoulementForm = this.fb.group({
      modeDeTravail: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      equipe: ['', Validators.required],
      shift: ['', Validators.required],
    });

    this.loadEquipes();
    this.loadModeTravail();
  }

  loadEquipes(): void {
    this.equipeService.getEquipes().subscribe({
      next : value => {
        this.equipes = value;
        console.log(this.equipes)
      },
      error : err => {
        console.error('Error fetching equipes', err);
      }
    })
  }

  loadModeTravail(): void {
    this.modeTravailService.getModeDeTravail().subscribe(
      (data: ModeTravailRequest[]) => {
        this.modeTravail = data;
        if (data.length > 0) {
          this.planDeRoulementForm.controls['modeDeTravail'].setValue(data[0].semaine);
          this.planDeRoulementForm.controls['shift'].setValue(data[0].jour);
        }
      },
      error => {
        console.error('Error fetching mode de travail', error);
      }
    );
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.planDeRoulementForm.valid) {
      const selectedEquipeId = this.planDeRoulementForm.get('equipe')?.value;
      console.log(selectedEquipeId)
      const formData = this.planDeRoulementForm.value;
      console.log(typeof formData.equipe)
      const shiftPlan: ShiftplanRequestModel = {
        periode: formData.modeDeTravail,
        dateDebut: formData.dateDebut,
        dateFin: formData.dateFin,
        modeTravailId: 1,
        shift: formData.shift,
        equipeId: Number(formData.equipe)
      };
      this.shiftPlanService.addShiftPlan(shiftPlan).subscribe({
        next : value => {
          console.log(value)
        },
        error : err => {
          console.log(err)
        }
      })
      console.log(shiftPlan)
    }
  }

  onCancel() {
    this.planDeRoulementForm.reset();
    this.formSubmitted = false;
  }

  isFormInvalid() {
    return this.planDeRoulementForm.invalid;
  }
}
