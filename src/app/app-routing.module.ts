import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescricaofilmeComponent } from './componentes/descricaofilme/descricaofilme.component';
import { FilmesComponent } from './componentes/filmes/filmes.component';
import { ExcluirComentariosComponent } from './componentes/comentarios/excluir-comentarios/excluir-comentarios.component';

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
  },
  {
    path: 'excluir/:id/:fk_id',
    component: ExcluirComentariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
