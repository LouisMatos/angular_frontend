import { Component, OnInit, OnDestroy } from '@angular/core';
import { PessoaModel } from './../cadastrar/pessoa.model';
import { PessoaService } from './../../service/pessoa.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit, OnDestroy {


  pessoas: Array<any> = new Array();
  pessoa: PessoaModel = new PessoaModel();

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();


  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      language: {
        processing: "Aguarde enquanto os dados são carregados ...",
        lengthMenu: "Mostrar _MENU_ registros por pagina",
        zeroRecords: "Nenhum registro correspondente ao criterio encontrado",
        infoEmpty: "Exibindo 0 a 0 de 0 registros",
        info: "Exibindo de _START_ a _END_ de _TOTAL_ registros",
        infoFiltered: "",
        search: "Procurar",
        paginate: {
          first: "Primeiro",
          previous: "Anterior",
          next: "Próximo",
          last: "Último"
        }
      }
    };

    this.listarPessoas();

  }


  listarPessoas() {
    this.pessoaService.listarPessoas().subscribe(pessoas => {
      this.pessoas = pessoas;
      this.dtTrigger.next();
    }, err => {
      console.log('Erro ao listar as pessoas', err);
    })
  }

  remover(codigo: number) {
    this.pessoaService.removerPessoa(codigo).subscribe(pessoa => {
      this.pessoa = new PessoaModel();
      this.listarPessoas();
    }, err => {
      console.log('Erro ao excluir a pessoa', err);
    })
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
