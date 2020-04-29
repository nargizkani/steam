import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGames } from './games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private url = 'http://localhost:8000/api/games/';
  headers = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getGames(): Observable<IGames[]> {
    return this.http.get<IGames[]>(this.url);
  }

  getGame(id): Observable<IGames> {
    return this.http.get<IGames>(this.url + id + '/');
  }

  create(game): Observable<IGames> {
    return this.http.post<IGames>(this.url, game, this.headers);
  }

  update(game): Observable<IGames> {
    return this.http.put<IGames>(this.url + game.id + '/', game, this.headers);
  }

  delete(id): Observable<any> {
    return this.http.delete<any>(this.url + id + '/');
  }

  getComments(): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'review/');
  }

  setComment(comment): Observable<any> {
    return this.http.post<any>(this.url + 'review/', comment, this.headers);
  }


}
