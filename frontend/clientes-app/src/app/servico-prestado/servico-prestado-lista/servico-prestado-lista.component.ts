import { Component, OnInit } from '@angular/core';
import { ServicoPrestadoService } from '../../servico-prestado.service';
import { Meses } from './meses';
import { ServicoPrestadoBusca } from './servico-prestado-busca';

@Component({
  selector: 'app-servico-prestado-lista',
  templateUrl: './servico-prestado-lista.component.html',
  styleUrls: ['./servico-prestado-lista.component.css']
})
export class ServicoPrestadoListaComponent implements OnInit {

  nome: string;
  mes: number;
  meses: Meses[];
  lista: ServicoPrestadoBusca[];

  constructor(
    private servicoPrestadoService: ServicoPrestadoService
  ) {
    this.meses = [
      { idx: 1, mes: 'Janeiro' },
      { idx: 2, mes: 'Fevereiro' },
      { idx: 3, mes: 'Março' },
      { idx: 4, mes: 'Abril' },
      { idx: 5, mes: 'Maio' },
      { idx: 6, mes: 'Junho' },
      { idx: 7, mes: 'Julho' },
      { idx: 8, mes: 'Agosto' },
      { idx: 9, mes: 'Setembro' },
      { idx: 10, mes: 'Outubro' },
      { idx: 11, mes: 'Novembro' },
      { idx: 12, mes: 'Desembro' }];
  }

  ngOnInit(): void {
  }

  consultar() {
    this.servicoPrestadoService.buscar(this.nome, this.mes)
      .subscribe(response => {
        this.lista = response;
        console.log(this.lista);

      });

  }

}