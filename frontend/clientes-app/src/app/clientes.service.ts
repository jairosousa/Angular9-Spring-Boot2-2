import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(
    private http: HttpClient
  ) { }

  getCliente(): Cliente {
    let cliente: Cliente = new Cliente();
    cliente.id = 1;
    cliente.dataCadastro = '19/10/2020';
    cliente.nome = "Fulano de tal";
    cliente.cpf = "9999999999";
    return cliente;
  }

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente);
  }
}
