import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContatoService } from '../contato.service';
import { Contato } from './contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  formulario: FormGroup;

  contatos: Contato[] = [];

  colunas = ['id', 'nome', 'email', 'favorito'];

  constructor(
    private service: ContatoService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.montarFormulario();
    this.listarContatos();

  }

  favoritar(contato: Contato) {
    this.service.favourite(contato)
      .subscribe(resposta => {
        contato.favorito = !contato.favorito;
      })
  }

  montarFormulario() {
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]]
    })
  }

  listarContatos() {
    this.service.list()
      .subscribe((contatos: Contato[]) => {
        this.contatos = contatos;
      })
  }

  submit() {

    const formValues = this.formulario.value;

    const contato: Contato = new Contato(formValues.nome, formValues.email);

    this.service.save(contato)
      .subscribe(resposta => {
        this.contatos.push(resposta);
        console.log(this.contatos);

      })
  }

}
