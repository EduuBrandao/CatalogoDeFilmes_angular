import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressFormComponent } from './componentes/address-form/address-form.component';
import { DescricaofilmeComponent } from './componentes/descricaofilme/descricaofilme.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listaFilmes',
    pathMatch: 'full'
  },
  {
    path: 'listaFilmes',
    component: AddressFormComponent
  },
  {
    path: 'descricao/:id',
    component: DescricaofilmeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
