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
    this.listaCampeoes = nav.extras.state.movies;
  }

  ngOnInit(): void {
    if (!this.listaCampeoes) {
      console.log('não pegou pelo status');
      this.listaCampeoes = this.dataControl.getListaSelecionado();
    }

    console.log(this.listaCampeoes);

  }

}
