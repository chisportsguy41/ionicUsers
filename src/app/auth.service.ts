import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './users';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private url: string;
  baseURL: string;
  host: string;
  l: any;

  constructor(private http: HttpClient) {
    this.l = window.location;
    if(this.l.port == '8100'){
      this.host = 'localhost:3000';
    }else{
      this.host = this.l.hostname + ((this.l.port.length>0)?':' + this.l.port:'');
    }
    this.url = `${this.l.protocol}//${this.host}/api/auth/`;
  }

  register (user: User): Observable<User> {
    return this.http.post<User>(this.url + 'register', user, httpOptions);
  }

  logIn(user: User): Observable<User> {
    return this.http.post<User>(this.url + 'login', user, httpOptions);
  }

  logOut(): any {
    return this.http.delete<any>(this.url + 'logout');
  }

  getRedirect(): string {
    this.baseURL = `${this.l.protocol}//${this.host}`;
    return this.baseURL;
  }

}
