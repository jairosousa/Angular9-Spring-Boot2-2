import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';

const routes: Routes = [
  {
    path: 'clientes', component: LayoutComponent, canActivate: [AuthGuard], children: [
      { path: "form", component: ClientesFormComponent },
      { path: "form/:id", component: ClientesFormComponent },
      { path: "lista", component: ClientesListaComponent },
      { path: '', redirectTo: '/clientes/lista', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
