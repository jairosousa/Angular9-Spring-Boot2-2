import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  getCliente(): Cliente {
    let cliente: Cliente = new Cliente();
    cliente.id = 1;
    cliente.dataCadastro = '19/10/2020';
    cliente.nome = "Fulano de tal";
    cliente.cpf = "9999999999";
    return cliente;
  }
}
