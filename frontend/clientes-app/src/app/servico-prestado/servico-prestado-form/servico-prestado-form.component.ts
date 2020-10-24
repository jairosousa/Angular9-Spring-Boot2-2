import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../clientes.service';
import { Cliente } from '../../clientes/cliente';
import { ServicoPrestado } from '../servico-prestado';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[];

  servico: ServicoPrestado;

  success: boolean = false;

  errors: String[];

  constructor(
    private servicoCliente: ClientesService
  ) { this.servico = new ServicoPrestado() }

  ngOnInit(): void {
    this.servicoCliente.getClientes()
      .subscribe(response => this.clientes = response);
  }

  onSubmit() {
    console.log(this.servico);

  }

}
