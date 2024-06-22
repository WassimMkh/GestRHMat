import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent {
  equipeForm: FormGroup;
  formSubmitted: boolean = false;
  availableMembers: string[] = ['Aziz_777', 'Mohamed_897', 'Issam_465'];
  selectedMembers: string[] = [];
  selectedTab: string = "form";

  constructor(private fb: FormBuilder) {
    this.equipeForm = this.fb.group({
      idEquipe: ['', Validators.required],
      responsableEquipe: ['', Validators.required],
      fonctions: ['', Validators.required],
      nomEquipe: ['', Validators.required],
      fonction: ['', Validators.required],
      availableMembers: [this.availableMembers],
      selectedMembers: [this.selectedMembers, Validators.required]
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.equipeForm.valid && this.selectedMembers.length > 0) {
      console.log({
        ...this.equipeForm.value,
        selectedMembers: this.selectedMembers
      });
    } else {
      console.error('Form is invalid or no members selected');
    }
  }

  onCancel() {
    this.equipeForm.reset();
    this.formSubmitted = false;
    this.availableMembers = ['Aziz_777', 'Mohamed_897', 'Issam_465'];
    this.selectedMembers = [];
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
    this.equipeForm.updateValueAndValidity(); // Update form validity when tab changes
  }

  isFormInvalid() {
    return this.equipeForm.invalid || this.selectedMembers.length === 0;
  }

  moveToSelected() {
    const availableControl = this.equipeForm.controls['availableMembers'];
    const selectedControl = this.equipeForm.controls['selectedMembers'];
    const selected = availableControl.value.filter((member: string) => this.availableMembers.includes(member));
    this.selectedMembers = [...this.selectedMembers, ...selected];
    this.availableMembers = this.availableMembers.filter(member => !selected.includes(member));
    availableControl.setValue(this.availableMembers);
    selectedControl.setValue(this.selectedMembers);
  }

  moveAllToSelected() {
    this.selectedMembers = [...this.selectedMembers, ...this.availableMembers];
    this.availableMembers = [];
    this.equipeForm.controls['availableMembers'].setValue(this.availableMembers);
    this.equipeForm.controls['selectedMembers'].setValue(this.selectedMembers);
  }

  moveToAvailable() {
    const availableControl = this.equipeForm.controls['availableMembers'];
    const selectedControl = this.equipeForm.controls['selectedMembers'];
    const selected = selectedControl.value.filter((member: string) => this.selectedMembers.includes(member));
    this.availableMembers = [...this.availableMembers, ...selected];
    this.selectedMembers = this.selectedMembers.filter(member => !selected.includes(member));
    availableControl.setValue(this.availableMembers);
    selectedControl.setValue(this.selectedMembers);
  }

  moveAllToAvailable() {
    this.availableMembers = [...this.availableMembers, ...this.selectedMembers];
    this.selectedMembers = [];
    this.equipeForm.controls['availableMembers'].setValue(this.availableMembers);
    this.equipeForm.controls['selectedMembers'].setValue(this.selectedMembers);
  }
}
