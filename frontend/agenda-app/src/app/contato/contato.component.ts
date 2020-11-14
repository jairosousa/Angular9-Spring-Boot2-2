import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';
import { Contato } from './contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(
    private service: ContatoService
  ) { }

  ngOnInit(): void {
    const contato: Contato = new Contato();
    contato.nome = 'Francisco';
    contato.email = 'franciscoe@email.com';
    contato.favorito = true;

    this.service.save(contato)
      .subscribe(resposta => console.log(resposta)
      )

  }

}
