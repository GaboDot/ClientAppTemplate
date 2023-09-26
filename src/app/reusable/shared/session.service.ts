import { Injectable } from '@angular/core';
import { Sesion } from 'src/app/interfaces/sesion';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  guardarSesionUsuario(usuarioSesion: Sesion) {
    sessionStorage.setItem('usuario', JSON.stringify(usuarioSesion));
  }

  obtenerSesionUsuario() {
    const dataCadena = sessionStorage.getItem('usuario');
    const usuario = JSON.parse(dataCadena!);
    return usuario;
  }

  obtenerTokenUsuario() {
    try {
      const dataCadena = sessionStorage.getItem('usuario');
      const usuario = JSON.parse(dataCadena!);
      return usuario.token;
    }
    catch(e) {
      return '';
    }
  }

  validarSesion(): boolean {
    try {
      const dataCadena = JSON.parse(sessionStorage.getItem('usuario')!);
      return dataCadena.token != null ? true : false;
    }
    catch(e) {
      return false;
    }
  }

  eliminarSesion() {
    sessionStorage.removeItem('usuario');
    sessionStorage.clear();
  }
}
