export interface mainTheoriqueRequest {
  id : number,
  nom : string,
  typeTraficIds : number,
  traficIds : number,
  equipementFamilleIds : number[],
  equipementIds : number[],
  accessoireIds : number[]
}
