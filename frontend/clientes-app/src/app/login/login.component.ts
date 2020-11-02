import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;
  errors: String[];
  cadastrando: boolean;
  usuario: Usuario;
  menssagemSucesso: string;


  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  onSubmit() {
    this.router.navigate(['/home']);

  }

  preparandoCadastrar(event) {
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelaCadastro() {
    this.cadastrando = false;
  }

  cadastrar() {
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;

    this.auth.salvar(usuario)
      .subscribe(response => {
        this.menssagemSucesso = 'Cadastro realizado com Sucesso! Efetue o login.';
        this.errors = [];
        this.cadastrando = false;
        this.limparFormulario();
      },
        errorResponse => {
          this.errors = errorResponse.error.errors;
          this.menssagemSucesso = null;
        })
  }

  limparFormulario() {
    this.username = '';
    this.password = '';
  }

}
