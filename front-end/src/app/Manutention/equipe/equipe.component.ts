import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {EquipeService} from "../../services/equipe.service";
import {EmployeRequestModel} from "../../models/employe-request.model";
import {EquipeRequestModel} from "../../models/equipe-request.model";

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit{
  equipeForm!: FormGroup;
  formSubmitted: boolean = false;
  availableMembers: EmployeRequestModel[] = [];
  selectedMembers: EmployeRequestModel[] = [];
  selectedTab: string = "form";
  fonctions!: string[];
  employes!: EmployeRequestModel[];
  selectedAvailableMembers: EmployeRequestModel[] = [];
  selectedSelectedMembers: EmployeRequestModel[] = [];

  constructor(
    private fb: FormBuilder,
    private equipeService: EquipeService
  ) { }

  initForm() {
    this.equipeForm = this.fb.group({
      responsableEquipe: ['', Validators.required],
      fonctions: ['', Validators.required],
      nomEquipe: ['', Validators.required],
      fonction: ['', Validators.required],
      availableMembersControl: [[], Validators.required],
      selectedMembersControl: [[], Validators.required]
    });

    this.equipeForm.get('fonctions')?.valueChanges.subscribe(fonction => {
      this.updateAvailableMembers(fonction);
    });

    this.equipeForm.get('availableMembersControl')?.valueChanges.subscribe(value => {
      this.selectedAvailableMembers = value;
    });

    this.equipeForm.get('selectedMembersControl')?.valueChanges.subscribe(value => {
      this.selectedSelectedMembers = value;
    });
  }

  ngOnInit() {
    this.initForm();
    this.getFonctions();
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.equipeForm.valid && this.selectedMembers.length > 0) {
      const formValue = { ...this.equipeForm.value };
      delete formValue.availableMembersControl;
      console.log(formValue);
      const equipe : EquipeRequestModel = {
        id : 1,
        nom : formValue.nomEquipe,
        responsable : formValue.responsableEquipe,
        employeIds : this.selectedMembers.map(member => member.id ),
        shiftId : null
      };
      console.log(equipe);
      this.equipeService.addEquipe(equipe).subscribe({
        next : value => {
         console.log(value)
         this.onCancel();
       },
        error : err => {
          console.log(err)
        }
       })
    } else {
      console.error('Form is invalid or no members selected');
    }
  }

  onCancel() {
    this.equipeForm.reset();
    this.formSubmitted = false;
    this.availableMembers = [];
    this.selectedMembers = [];
    this.selectedAvailableMembers = [];
    this.selectedSelectedMembers = [];
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
    this.equipeForm.updateValueAndValidity(); // Update form validity when tab changes
  }

  isFormInvalid() {
    return this.equipeForm.invalid;
  }

  moveToSelected() {
    this.selectedMembers = [...this.selectedMembers, ...this.selectedAvailableMembers];
    this.availableMembers = this.availableMembers.filter(member => !this.selectedAvailableMembers.includes(member));
    this.selectedAvailableMembers = [];
    this.equipeForm.controls['availableMembersControl'].setValue(this.availableMembers);
    this.equipeForm.controls['selectedMembersControl'].setValue(this.selectedMembers);
  }

  moveAllToSelected() {
    this.selectedMembers = [...this.selectedMembers, ...this.availableMembers];
    this.availableMembers = [];
    this.selectedAvailableMembers = [];
    this.equipeForm.controls['availableMembersControl'].setValue(this.availableMembers);
    this.equipeForm.controls['selectedMembersControl'].setValue(this.selectedMembers);
  }

  moveToAvailable() {
    this.availableMembers = [...this.availableMembers, ...this.selectedSelectedMembers];
    this.selectedMembers = this.selectedMembers.filter(member => !this.selectedSelectedMembers.includes(member));
    this.selectedSelectedMembers = [];
    this.equipeForm.controls['availableMembersControl'].setValue(this.availableMembers);
    this.equipeForm.controls['selectedMembersControl'].setValue(this.selectedMembers);
  }

  moveAllToAvailable() {
    this.availableMembers = [...this.availableMembers, ...this.selectedMembers];
    this.selectedMembers = [];
    this.selectedSelectedMembers = [];
    this.equipeForm.controls['availableMembersControl'].setValue(this.availableMembers);
    this.equipeForm.controls['selectedMembersControl'].setValue(this.selectedMembers);
  }

  getFonctions() {
    this.equipeService.getFonctions().subscribe({
      next: value => {
        this.fonctions = value;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  updateAvailableMembers(fonction: string) {
    this.equipeService.getEmployesByFonction(fonction).subscribe({
      next: value => {
        this.availableMembers = value;
        this.equipeForm.controls['availableMembersControl'].setValue(this.availableMembers);
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
