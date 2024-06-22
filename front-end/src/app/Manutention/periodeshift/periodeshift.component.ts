import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeriodeshiftService } from '../../services/periodeshift.service';
import {PeriodeshiftRequest} from "../../models/periodeshift-request";

@Component({
  selector: 'app-periodeshift',
  templateUrl: './periodeshift.component.html',
  styleUrls: ['./periodeshift.component.css']
})
export class PeriodeshiftComponent implements OnInit {
  shiftForm!: FormGroup;
  formSubmitted: boolean = false;
  selectedTab: string = "form";
  fileName: string = '';

  constructor(private fb: FormBuilder, private periodeShiftService: PeriodeshiftService) {
  }
  InitForm() {
    this.shiftForm = this.fb.group({
      normalShift1: [{ value: '', disabled: true }, Validators.required],
      normalShift2: [{ value: '', disabled: true }, Validators.required],
      normalShift3: [{ value: '', disabled: true }, Validators.required],
      ramadanShift1: [{ value: '', disabled: true }, Validators.required],
      ramadanShift2: [{ value: '', disabled: true }, Validators.required],
      ramadanShift3: [{ value: '', disabled: true }, Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.InitForm()
    this.getShifts();
  }

  getShifts() {
    this.periodeShiftService.getShifts().subscribe({
      next: (shifts) => {
        console.log(shifts)
        this.shiftForm.patchValue({
          normalShift1: shifts.normalShift1,
          normalShift2: shifts.normalShift2,
          normalShift3: shifts.normalShift3,
          ramadanShift1: shifts.ramadanShift1,
          ramadanShift2: shifts.ramadanShift2,
          ramadanShift3: shifts.ramadanShift3
        });
      }
    });
  }

  updatePeriodeShift() {
    this.formSubmitted = true;
    if (this.shiftForm.controls['startDate'].valid && this.shiftForm.controls['endDate'].valid) {
      const startDate = this.shiftForm.value.startDate;
      const endDate = this.shiftForm.value.endDate;
      console.log(startDate,endDate)
      this.periodeShiftService.updateShifts(1,startDate,endDate).subscribe({
        next : value => {
          console.log(value);
        }
      })
    }
  }

  onCancel() {
    this.shiftForm.reset();
    this.formSubmitted = false;
    this.getShifts();
  }

  toggleAdd() {

  }

  togglelist() {

  }

  toggledownload() {

  }

  downloadFile() {

  }
}
