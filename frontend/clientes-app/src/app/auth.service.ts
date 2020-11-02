import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from './login/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = environment.apiURLBase + '/api/usuarios'
  tokenUrl: string = environment.apiURLBase + environment.obterTokenUrl;
  clienteId: string = environment.clienteId;
  clienteSecret: string = environment.clienteSecret;

  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(
    private http: HttpClient,
  ) { }

  obterToken() {
    const tokenString = localStorage.getItem('access_token');
    if (tokenString) {
      const token = JSON.parse(tokenString).access_token;
      return token;
    }
    return null;
  }

  salvar(usuario: Usuario): Observable<any> {
    return this.http.post(this.apiUrl, usuario);
  }

  tentarLogar(username: string, password: string): Observable<any> {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');

    const headers = {
      'Authorization': 'Basic ' + btoa(`${this.clienteId}:${this.clienteSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded'
    }

    return this.http.post(this.tokenUrl, params.toString(), { headers });
  }

  isAuthenticated(): boolean {
    const token = this.obterToken();
    if (token) {
      const expired = this.jwtHelper.isTokenExpired(token);
      return !expired;
    }
    return false;
  }

  encerrarSessao() {
    localStorage.removeItem('access_token');
  }

  getUsuarioAuthenticado() {
    const token = this.obterToken();
    if (token) {
      const usuario = this.jwtHelper.decodeToken(token).user_name;
      return usuario;
    }
    return null;
  }
}
