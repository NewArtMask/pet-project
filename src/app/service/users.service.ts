import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiURL = 'https://the-one-api.dev/v2';
  // apiURL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers(offset: number) {
    return this.http.get(`${this.apiURL}/character?offset=${offset}&limit=5`, {
      headers: {
        'Authorization': 'Bearer sUxFhZvnkYN1MAyx6dpe'
      }
    });
  }
  //'/features/:id/:username'
  getUser(id: string) {
    return this.http.get(`${this.apiURL}/character/${id}`, {
      headers: {
        'Authorization': 'Bearer sUxFhZvnkYN1MAyx6dpe'
      }
    });
  }
}
