import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmesComponent } from './componentes/filmes/filmes.component';
import { DescricaofilmeComponent } from './componentes/descricaofilme/descricaofilme.component';
import { DateFnsModule } from 'ngx-date-fns';
import { DatePipe } from '@angular/common';
import { ListaComentariosComponent } from './componentes/comentarios/lista-comentarios/lista-comentarios.component';
import { CriarComentarioComponent } from './componentes/comentarios/criar-comentario/criar-comentario.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './componentes/loading/loading.component';
import { ElencoComponent } from './componentes/elenco/elenco.component';
import { TMDBService } from './services/TMDB/tmdb.service';
import { ComentarioService } from './services/comentario/comentario.service';
import { LikeDislikeService } from './services/Like/LikeDislike.service';
import { BannerComponent } from './componentes/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    FilmesComponent,
    DescricaofilmeComponent,
    ListaComentariosComponent,
    CriarComentarioComponent,
    LoadingComponent,
    ElencoComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DateFnsModule.forRoot(),
    CarouselModule.forRoot(),
    MatDialogModule,
    NgbModule,
    RouterModule,
  ],
  providers: [DatePipe, TMDBService, ComentarioService, LikeDislikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
