import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrl: './equipe.component.css'
})
export class EquipeComponent {
  equipeForm: FormGroup;
  formSubmitted: boolean = false;
  availableMembers: string[] = ['Aziz_777', 'Mohamed_897', 'Issam_465'];
  selectedMembers: string[] = ['Aziz_777'];

  constructor(private fb: FormBuilder) {
    this.equipeForm = this.fb.group({
      idEquipe: ['', Validators.required],
      responsableEquipe: ['', Validators.required],
      fonctions: ['', Validators.required],
      nomEquipe: ['', Validators.required],
      fonction: ['', Validators.required],
      availableMembers: [this.availableMembers],
      selectedMembers: [this.selectedMembers]
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.equipeForm.valid) {
      console.log(this.equipeForm.value);
      // handle form submission
    }
  }

  onCancel() {
    this.equipeForm.reset();
    this.formSubmitted = false;
  }

  moveToSelected() {
    const selected = this.equipeForm.controls['availableMembers'].value.filter((member: string) => this.availableMembers.includes(member));
    this.selectedMembers = [...this.selectedMembers, ...selected];
    this.availableMembers = this.availableMembers.filter(member => !selected.includes(member));
  }

  moveAllToSelected() {
    this.selectedMembers = [...this.selectedMembers, ...this.availableMembers];
    this.availableMembers = [];
  }

  moveToAvailable() {
    const selected = this.equipeForm.controls['selectedMembers'].value.filter((member: string) => this.selectedMembers.includes(member));
    this.availableMembers = [...this.availableMembers, ...selected];
    this.selectedMembers = this.selectedMembers.filter(member => !selected.includes(member));
  }

  moveAllToAvailable() {
    this.availableMembers = [...this.availableMembers, ...this.selectedMembers];
    this.selectedMembers = [];
  }
}

