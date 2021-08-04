import { ConsultarComponent } from './app/pessoa/consultar/consultar.component';
import { CadastrarComponent } from './app/pessoa/cadastrar/cadastrar.component';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from "@angular/router";


const appRoutes: Routes = [
    { path: 'cadastro-pessoa',         component: CadastrarComponent },
    { path: 'consulta-pessoa',         component: ConsultarComponent }

];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);