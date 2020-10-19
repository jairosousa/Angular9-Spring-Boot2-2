import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  nome = "Caio";

  constructor() {
    this.cliente = new Cliente()
    this.cliente.nome = 'Jairo';
    this.cliente.cpf = '375.779.052-91';
  }

  ngOnInit(): void {
  }

  clicar(): void {
    console.log("cliquei");

  }

}
