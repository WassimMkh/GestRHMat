import {EmployeRequestModel} from "./employe-request.model";

export interface PagedEmployeResponse {
  content: EmployeRequestModel[];
  totalElements: number;
}
