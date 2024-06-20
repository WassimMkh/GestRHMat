import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-periodeshift',
  templateUrl: './periodeshift.component.html',
  styleUrl: './periodeshift.component.css'
})
export class PeriodeshiftComponent {
  shiftForm: FormGroup;
  formSubmitted: boolean = false;

  constructor(private fb: FormBuilder) {
    this.shiftForm = this.fb.group({
      normalShift1: ['06:45 à 14:45', Validators.required],
      normalShift2: ['14:45 à 22:45', Validators.required],
      normalShift3: ['22:45 à 06:45', Validators.required],
      ramadanShift1: ['07:45 à 15:45', Validators.required],
      ramadanShift2: ['15:45 à 23:45', Validators.required],
      ramadanShift3: ['23:45 à 07:45', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.shiftForm.controls['startDate'].valid && this.shiftForm.controls['endDate'].valid) {
      console.log(this.shiftForm.value);
      // handle form submission
    }
  }

  onCancel() {
    this.shiftForm.reset();
    this.formSubmitted = false;
  }
}
