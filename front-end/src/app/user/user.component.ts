import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  responsableForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.responsableForm = this.fb.group({
      matricule: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      motDePasse: ['', [Validators.required, Validators.minLength(6)]],
      confirmerMotDePasse: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.responsableForm.valid) {
      console.log(this.responsableForm.value);
    } else {
      console.error('Form is invalid');
    }
  }
}
