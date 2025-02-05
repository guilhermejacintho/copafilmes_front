import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { map, catchError, finalize } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Movie } from '../models/dataModels';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*',
      'Access-Control-Allow-Origin': 'http://localhost:5051'
    })
  };

  public getMovies(): Observable<Array<Movie>> {
    let ret = this.http.get(`${environment.API_FILMES}`).pipe(map((response: Array<Movie>) => { return response; }), catchError(this.handleError<Array<Movie>>()));
    if (ret) return ret;
    return of(new Array<Movie>());
  }

  public execCopa(participantes: Array<Movie>): Observable<Array<Movie>> {
    let ret = this.http.post(`${environment.API_COPA}`, participantes, this.httpOptions).pipe(map((response: Array<Movie>) => { return response; }), catchError(this.handleError<Array<Movie>>()));
    if (ret) return ret;
    return of(new Array<Movie>());
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
