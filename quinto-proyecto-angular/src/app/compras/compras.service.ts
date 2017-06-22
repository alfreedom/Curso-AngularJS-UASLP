import { Injectable } from "@angular/core";
import { Compras } from "./comprasdb";
import { Compra } from "./compra";

@Injectable()
export class ComprasService {

  getCompras(): Promise<Compra[]>{
    return Promise.resolve(Compras);
  }

}