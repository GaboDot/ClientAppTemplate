import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formularioLogin: FormGroup;
  ocultarPassword: boolean = true;
  mostrarLoading: boolean = false;

  constructor(private fb: FormBuilder,
    private router: Router) {
      this.formularioLogin = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
    }

    ngOnInit(): void {}

    iniciarSesion() {
      this.mostrarLoading = true;
      setTimeout(() => {
        this.mostrarLoading = false;
      }, 1500);
      // const request: Login = {
      //   email: this.formularioLogin.value.email,
        // clave: window.btoa(this.formularioLogin.value.password)
      // }
      // this._usuarioService.IniciarSesion(request).subscribe({
      //   next: (data) => {
      //     if(data.status) {
      //       this._utilityService.guardarSesionUsuario(data.value);
      //       this.router.navigate(['pages']);
      //     }
      //     else {
      //       this._utilityService.mostrarAlerta('Usuario o clave incorrectos', 'Cerrar', 'notif-warning');
      //     }
      //   },
      //   complete: () => {
      //     this.mostrarLoading = false;
      //   },
      //   error: () => {
      //     this._utilityService.mostrarAlerta('Error al iniciar sesión', 'Cerrar', 'notif-error');
      //   }
      // });
    }
}
