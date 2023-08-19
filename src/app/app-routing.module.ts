import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescricaofilmeComponent } from './componentes/descricaofilme/descricaofilme.component';
import { FilmesComponent } from './componentes/filmes/filmes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listaFilmes',
    pathMatch: 'full'
  },
  {
    path: 'listaFilmes',
    component: FilmesComponent
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
