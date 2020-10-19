import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../clientes.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;

  constructor(private clienteService: ClientesService) {
    this.cliente = this.clienteService.getCliente();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.cliente);

  }

}
