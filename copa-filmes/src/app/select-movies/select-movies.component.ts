import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../models/dataModels';
import { ApiServiceService } from '../services/api-service.service';
import { DataControlService } from '../services/data-control.service';

@Component({
  selector: 'app-select-movies',
  templateUrl: './select-movies.component.html',
  styleUrls: ['./select-movies.component.css']
})
export class SelectMoviesComponent implements OnInit {

  listaFilmes: Array<Movie>;
  quantidadeSelecionados: number = 0;

  constructor(private apiService: ApiServiceService,
    private dataControl: DataControlService,
    private router: Router) {
    this.listaFilmes = dataControl.getListaFilmes();
  }

  ngOnInit(): void {
    if (this.listaFilmes === undefined || this.listaFilmes.length == 0) {
      this.apiService.getMovies().subscribe((resp) => {
        this.dataControl.setListaFilmes(resp);
        this.listaFilmes = this.dataControl.getListaFilmes();
        console.log('consulta lista filmes..');
      });
    }

  }

  onMovieClick(filme: Movie) {
    if ((filme.selected == false || filme.selected === undefined) && this.quantidadeSelecionados >= 8) return;

    filme.selected = !filme.selected;

    this.quantidadeSelecionados = this.listaFilmes.filter(function (el) { return el.selected == true; }).length;

    if (this.quantidadeSelecionados == 8) this.executaCopa();

  }

  executaCopa() {
    if (this.quantidadeSelecionados != 8) return;
    this.dataControl.setListaSelecionado(this.listaFilmes.filter(function (el) { return el.selected == true; }));
    this.router.navigateByUrl('/winners', { state: { movies: this.dataControl.getListaSelecionado() } });
  }

}
