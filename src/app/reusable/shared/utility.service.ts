import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private _snackBar: MatSnackBar) {}

  // guardarSesionUsuario(usuarioSesion: Sesion) {
  //   localStorage.setItem('usuario', JSON.stringify(usuarioSesion));
  // }

  obtenerSesionUsuario() {
    const dataCadena = localStorage.getItem('usuario');
    const usuario = JSON.parse(dataCadena!);
    return usuario;
  }

  eliminarSesion() {
    localStorage.removeItem('usuario');
  }

}
