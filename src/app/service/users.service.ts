import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // apiURL = 'https://rickandmortyapi.com/api/character';
  apiURL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.apiURL}`);
  }
  //'/features/:id/:username'
  getUser() {
    return this.http.get(`${this.apiURL}`);
  }
}
