import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/interfaces/menu';
import { SessionService } from 'src/app/reusable/shared/session.service';
// import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{

  opened: boolean = false;
  listaMenus: Menu[] = [];
  email: string = '';
  nombre: string = '';

  constructor(
    private router: Router,
    // private _menuService: MenuService,
    private _sessionService: SessionService
  ) {}

  ngOnInit(): void {
    const usuario = this._sessionService.obtenerSesionUsuario();
    if(usuario != null) {
      this.email = usuario.email;
      this.nombre = usuario.nombre + ' ' + usuario.apellidoPaterno;
    //   this._menuService.lista().subscribe({
    //     next: (response) => {
    //       if(response.status)
    //       {
    //         this.listaMenus = response.value;
    //         this.router.navigate(['/pages/departamentos']);
    //       }
    //     },
    //     error: (e) => {}
    //   });
    }
    else {
      this._sessionService.eliminarSesion();
      this.router.navigate(['login']);
    }
  }

  cerrarSesion() {
    this._sessionService.eliminarSesion();
    this.router.navigate(['login']);
  }

}