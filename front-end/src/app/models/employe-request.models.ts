// employe-request.models.ts

export interface EmployeRequest {
  id: number;
  nom: string;
  fonction: string;
}

export interface PagedEmployeResponse {
  content: EmployeRequest[];
  totalElements: number;
}
