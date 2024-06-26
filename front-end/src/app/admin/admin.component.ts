import { Component } from '@angular/core';
import {KeycloakService} from "../services/keycloak.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmployeService} from "../services/employe.service";
import {EmployeRequestModel} from "../models/employe-request.model";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  employees: EmployeRequestModel[] = [];
  page: number = 1;
  newEmployee: EmployeRequestModel = { id: 0, nom: '', fonction: '', equipe: null };
  selectedEmployee: EmployeRequestModel = { id: 0, nom: '', fonction: '', equipe: null };

  constructor(private employeService: EmployeService,private keyCloakService : KeycloakService) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeService.getEmploye().subscribe(data => {
      this.employees = data;
    });
  }

  onAddEmployee() {
    this.employeService.addEmploye(this.newEmployee).subscribe(() => {
      this.loadEmployees();
      this.newEmployee = { id: 0, nom: '', fonction: '', equipe: null };
    });
  }

  onEditEmployee(employee: EmployeRequestModel) {
    this.selectedEmployee = { ...employee };
  }

  onUpdateEmployee() {
    this.employeService.updateEmploye(this.selectedEmployee.id, this.selectedEmployee).subscribe(() => {
      this.loadEmployees();
      this.selectedEmployee = { id: 0, nom: '', fonction: '', equipe: null };
    });
  }

  onDeleteEmployee(employeeId: number) {
    this.employeService.deleteEmploye(employeeId).subscribe(() => {
      this.loadEmployees();
    });
  }

  onLogout() {
    this.keyCloakService.logout();
  }
}
