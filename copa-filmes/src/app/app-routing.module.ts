import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectMoviesComponent } from './select-movies/select-movies.component';
import { ShowWinnersComponent } from './show-winners/show-winners.component';


const routes: Routes = [
  { path: '', component: SelectMoviesComponent },
  { path: 'winners', component: ShowWinnersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
