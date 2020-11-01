import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  id: number;

  constructor(
    private clienteService: ClientesService,
    private router: Router,
    private activatedRouter: ActivatedRoute) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    this.activatedRouter.params
      .subscribe(urlParams => {
        this.id = urlParams['id'];
        if (this.id) {
          this.clienteService
            .getClienteById(this.id)
            .subscribe(response => this.cliente = response,
              errorresponse => this.cliente = new Cliente())
        }
      });

  }

  onSubmit(): void {

    if (this.id) {
      this.clienteService.atualizar(this.cliente)
        .subscribe(response => {
          this.success = true;
          this.errors = [];
        },
          errorResponse => {
            this.success = false;
            this.errors = ['Erro ao atualizar o cliente']
          });
    } else {
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


  }

  voltarParaListagem() {
    this.router.navigate(['/clientes/lista']);
  }

}
