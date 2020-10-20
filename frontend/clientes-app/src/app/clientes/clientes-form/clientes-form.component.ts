import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from '../../clientes.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;

  success: boolean = false;

  errors: String[];

  constructor(
    private clienteService: ClientesService,
    private router: Router) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.clienteService.salvar(this.cliente)
      .subscribe(response => {
        this.cliente = response;
        this.success = true;
        this.errors = [];
      },
        errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors
        });

  }

  voltarParaListagem() {
    this.router.navigate(['/clientes-lista']);
  }

}
