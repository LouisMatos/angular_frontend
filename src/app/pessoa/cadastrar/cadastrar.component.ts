import { Component, OnInit } from '@angular/core';
import { PessoaModel } from './pessoa.model';
import { PessoaService } from './../../service/pessoa.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  pessoa: PessoaModel = new PessoaModel();

  constructor(private pessoaService: PessoaService) { }

  cadastrar() {
    console.log(this.pessoa);

    this.pessoaService.cadastrarPessoa(this.pessoa).subscribe(pessoa => {
      this.pessoa = new PessoaModel();
      alert('deu bom');
    }, err => {
      console.log('Erro ao cadastrar Pessoa', err)
    })
  }

  ngOnInit(): void {
  }
}
