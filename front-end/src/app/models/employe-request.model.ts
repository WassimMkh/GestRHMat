import {EquipeRequestModel} from "./equipe-request.model";


export interface EmployeRequestModel {
  id : number,
  nom : string,
  fonction : string,
  equipe : EquipeRequestModel
}

