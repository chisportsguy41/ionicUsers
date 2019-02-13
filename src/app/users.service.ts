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

export class UsersService {
  private url: string;
  private baseURL: string;
  private host: string;
  private l: any;

  constructor(private http: HttpClient) {
    this.l = window.location;
    if(this.l.port == '8100'){
      this.host = 'localhost:3000';
    }else{
      this.host = this.l.hostname + ((this.l.port.length>0)?':' + this.l.port:'');
    }
    this.url = `${this.l.protocol}//${this.host}/api/users/`;
  }

  getUsers(): Observable<User> {
    return this.http.get<User>(this.url);
  }

  getUser(id:string): Observable<User> {
    return this.http.get<User>(this.url + id);
  }

  createUser (user: User): Observable<User> {
    return this.http.post<User>(this.url, user, httpOptions);
  }

  editUser(user: User): Observable<User> {
    return this.http.put<User>(this.url, user, httpOptions);
  }

  deleteUser(id:string): Observable<User> {
    return this.http.delete<User>(this.url + id);
  }

  getRedirect(): string {
    this.baseURL = `${this.l.protocol}//${this.host}`;
    return this.baseURL;
  }

}
