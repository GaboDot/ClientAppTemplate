import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { environment } from 'src/environments/environment';
import { ResponseApi } from '../interfaces/response-api';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

    usuario: Usuario;

    private urlApi: string = environment.endpoint + 'Usuario/';

    constructor(private http: HttpClient) { }

    Login(request: Usuario):Observable<ResponseApi> {
        return this.http.post<ResponseApi>(`${this.urlApi}Login`, request);
      }
}