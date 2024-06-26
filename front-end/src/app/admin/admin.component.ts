import {Component, OnInit} from '@angular/core';
import {KeycloakService} from "../services/keycloak.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmployeService} from "../services/employe.service";
import {EmployeRequestModel} from "../models/employe-request.model";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{
  userForm!: FormGroup;
  employes: EmployeRequestModel[] = [];
  page: number = 1;
  pageSize: number = 5;
  totalRecords: number = 0;
  selectedEmploye: EmployeRequestModel | null = null;

  constructor(
    private fb: FormBuilder,
    private employeService: EmployeService,
    private modalService: NgbModal
  ) {
    this.userForm = this.fb.group({
      matricule: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, { validator: this.checkPasswords });
  }

  ngOnInit(): void {
    this.fetchEmployes();
  }

  checkPasswords(group: FormGroup) {
    const pass = group.get('password')?.value;
    const confirmPass = group.get('confirmPassword')?.value;
    return pass === confirmPass ? null : { notSame: true };
  }

  fetchEmployes() {
    this.employeService.getEmploye().subscribe((response: EmployeRequestModel[]) => {
      this.employes = response;
      this.totalRecords = response.length;
    });
  }

  openModal(content: any, employe?: EmployeRequestModel) {
    this.selectedEmploye = employe ? employe : null;
    if (employe) {
      this.userForm.patchValue(employe);
    } else {
      this.userForm.reset();
    }
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }

    const employeData: EmployeRequestModel = this.userForm.value;

    if (this.selectedEmploye) {
      this.employeService.updateEmploye(this.selectedEmploye.id, employeData).subscribe(() => {
        this.fetchEmployes();
        this.modalService.dismissAll();
      });
    } else {
      this.employeService.addEmploye(employeData).subscribe(() => {
        this.fetchEmployes();
        this.modalService.dismissAll();
      });
    }
  }

  onDelete(id: number) {
    this.employeService.deleteEmploye(id).subscribe(() => {
      this.employes = this.employes.filter(employe => employe.id !== id);
      this.totalRecords--;
    });
  }

}
