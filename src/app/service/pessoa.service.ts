import { PessoaModel } from './../pessoa/cadastrar/pessoa.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private Http: HttpClient) { 


  }

  listarPessoas(): Observable<any>{
    return this.Http.get("http://localhost:8090/service/pessoa/");
  }

  cadastrarPessoa(pessoa: PessoaModel): Observable<any>{

   return this.Http.put("http://localhost:8090/service/pessoa/", pessoa)
  }

  removerPessoa(codigo: any): Observable<any>{
    return this.Http.delete("http://localhost:8090/service/pessoa/".concat(codigo))
  }

}
