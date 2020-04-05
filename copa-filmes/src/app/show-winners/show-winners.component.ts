import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../models/dataModels';
import { DataControlService } from '../services/data-control.service';

@Component({
  selector: 'app-show-winners',
  templateUrl: './show-winners.component.html',
  styleUrls: ['./show-winners.component.css']
})
export class ShowWinnersComponent implements OnInit {

  listaCampeoes: Array<Movie>;

  constructor(private dataControl: DataControlService, private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav.extras.state != undefined)
      this.listaCampeoes = nav.extras.state.movies;
  }

  ngOnInit(): void {
    if (!this.listaCampeoes) {
      console.log('não pegou pelo status');
      this.listaCampeoes = this.dataControl.getListaCampeoes();

      if (this.listaCampeoes == undefined || this.listaCampeoes.length == 0) {
        alert('Ocorreu um erro ao carregar as informações.');
        this.jogarNovamente();
      }
    }

    console.log(this.listaCampeoes);

  }

  jogarNovamente() {
    this.router.navigateByUrl('/');
  }

}
