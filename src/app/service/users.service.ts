import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiURL = 'https://dummyapi.io/data/v1';
  headers = {
    'app-id': '6122c7f4a99ae1923a8fd79f'
  };

  constructor(private http: HttpClient) { }

  getUsers(page: number) {
    return this.http.get<any>(`${this.apiURL}/user?page=${page}&limit=5`, {
      headers: this.headers
    });
  }
  //'/features/:id/:username'
  getUser(id: string) {
    return this.http.get<any>(`${this.apiURL}/user/${id}`, {
      headers: this.headers
    });
  }
}
