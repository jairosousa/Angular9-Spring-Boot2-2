import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  formulario: FormGroup

  constructor(
    private service: ContatoService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]]
    })


  }

  submit() {

    console.log(this.formulario.controls.nome.errors.required)
    console.log(this.formulario.controls.email.errors.required)
    console.log(this.formulario.controls.email.errors.email)

    console.log(this.formulario.valid);


    // this.service.save(contato)
    //   .subscribe(resposta => console.log(resposta)
    //   )
  }

}
