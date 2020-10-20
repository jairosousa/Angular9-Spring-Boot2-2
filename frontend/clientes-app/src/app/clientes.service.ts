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

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://localhost:8080/api/clientes');
  }

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente);
  }

  getClientesMoc(): Cliente[] {
    let cliente = new Cliente();
    cliente.id = 1;
    cliente.nome = 'Fulano';
    cliente.cpf = '12345678912';
    cliente.dataCadastro = '20/10/2020';
    let cliente2 = new Cliente();
    cliente2.id = 2;
    cliente2.nome = 'FCiclano';
    cliente2.cpf = '98765432198';
    cliente2.dataCadastro = '20/10/2020';
    return [cliente, cliente2];
  }
}
