import { Injectable } from "@angular/core";
import { Producto } from "./producto";
import { Productos } from "./productosDB";

@Injectable()
export class ProductoService {

	getProductos(): Promise<Producto[]> {
		return Promise.resolve(Productos);
  }
	
}