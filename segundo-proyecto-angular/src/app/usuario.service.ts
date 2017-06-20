
import { Injectable } from "@angular/core";
import { Usuario } from "./usuario";
import { Usuarios } from "./usuariosDB";

@Injectable()
export class UsuarioService {

    getUsuarios(): Promise<Usuario[]> {
        return Promise.resolve(Usuarios);
    }
}