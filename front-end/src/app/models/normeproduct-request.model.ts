import {traficRequest} from "./trafic-request.model";
import {mainTheoriqueRequest} from "./maintheorique-request.model";
import {ModeRequest} from "./mode-request.model";


export interface NormeproductRequest {
  trafic : traficRequest,
  mainTheorique : mainTheoriqueRequest,
  mode : ModeRequest,
  norme : number,
  sens : string,
  suiviProduit : string
}
