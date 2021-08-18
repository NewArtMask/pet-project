import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiURL = 'https://the-one-api.dev/v2';
  // api tocken: sUxFhZvnkYN1MAyx6dpe
  // apiURL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers(offset: number) {
    return this.http.get(`${this.apiURL}/character?offset=${offset}&limit=55`, {
      headers: {
        'Authorization': 'Bearer sUxFhZvnkYN1MAyx6dpe'
      }
    });
  }
  //'/features/:id/:username'
  getUser() {
    return this.http.get(`${this.apiURL}`);
  }
}
