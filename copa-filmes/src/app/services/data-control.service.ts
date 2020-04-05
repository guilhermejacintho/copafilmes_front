import { Injectable } from '@angular/core';
import { Movie } from '../models/dataModels';

@Injectable({
  providedIn: 'root'
})
export class DataControlService {

  private listaFilmes: Array<Movie>;
  private listaFilmesSelecionados: Array<Movie>;
  private listaFilmesCampeoes: Array<Movie>;

  constructor() {
    this.listaFilmes = new Array<Movie>();
    this.listaFilmesSelecionados = new Array<Movie>();
    this.listaFilmesCampeoes = new Array<Movie>();
  }

  setListaFilmes(lista: Array<Movie>) {
    this.listaFilmes = lista;
  }

  setListaSelecionado(lista: Array<Movie>) {
    this.listaFilmesSelecionados = lista;
  }

  setListaCampeoes(lista: Array<Movie>) {
    this.listaFilmesCampeoes = lista;
  }

  getListaFilmes() {
    return this.listaFilmes;
  }

  getListaSelecionado() {
    return this.listaFilmesSelecionados;
  }

  getListaCampeoes() {
    return this.listaFilmesCampeoes;
  }

}
