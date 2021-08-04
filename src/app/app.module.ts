import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopmenuComponent } from './topmenu/topmenu.component';


import { RouterModule } from '@angular/router';
import { routing } from './../app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ConsultarComponent } from './pessoa/consultar/consultar.component';
import { CadastrarComponent } from './pessoa/cadastrar/cadastrar.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    TopmenuComponent,
    ConsultarComponent,
    CadastrarComponent
  ],
  exports: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule.forRoot(),
    routing
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
