import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { HttpClientModule } from '@angular/common/http';
import { AddressFormComponent } from './componentes/address-form/address-form.component';
import { FormsModule } from '@angular/forms';
import { FilmesComponent } from './componentes/filmes/filmes.component';
import { DescricaofilmeComponent } from './componentes/descricaofilme/descricaofilme.component';
import { ChunkPipe } from './pipes/chunk.pipe';
import { DateFnsModule } from 'ngx-date-fns';
import { DatePipe } from '@angular/common';
import { ComentariosComponent } from './componentes/comentarios/comentarios.component';
import { ListaComentariosComponent } from './componentes/comentarios/lista-comentarios/lista-comentarios.component';
import { CriarComentarioComponent } from './componentes/comentarios/criar-comentario/criar-comentario.component';
import { FilmDetailsDialogComponent } from './componentes/film-details-dialog/film-details-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    AddressFormComponent,
    FilmesComponent,
    DescricaofilmeComponent,
    ChunkPipe,
    ComentariosComponent,
    ListaComentariosComponent,
    CriarComentarioComponent,
    FilmDetailsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DateFnsModule.forRoot(),
    MatDialogModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
