import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // tslint:disable-next-line:variable-name
  _url = 'http://localhost:8000/api/';
  headers = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(private http: HttpClient) { }

  Login(user: User): Observable<User> {
    return this.http.post<User>(this._url + 'login/', user, this.headers);
  }
  Register(user: User): Observable<User> {
    return this.http.post<User>(this._url + 'register/', user, this.headers);
  }
}

