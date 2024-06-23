import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {EquipeService} from "../../services/equipe.service";
import {EquipeRequestModel} from "../../models/equipe-request.model";
import {ModeTravailRequest} from "../../models/modetravail-request.model";
import {ModetravailService} from "../../services/modetravail.service";

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
    private modeTravailService: ModetravailService
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
    this.equipeService.getEquipes().subscribe(
      (data: EquipeRequestModel[]) => {
        this.equipes = data;
      },
      error => {
        console.error('Error fetching equipes', error);
      }
    );
  }

  loadModeTravail(): void {
    this.modeTravailService.getModeDeTravail().subscribe(
      (data: ModeTravailRequest[]) => {
        this.modeTravail = data;
      },
      error => {
        console.error('Error fetching mode de travail', error);
      }
    );
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.planDeRoulementForm.valid) {
      // Handle form submission
      console.log(this.planDeRoulementForm.value);
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
