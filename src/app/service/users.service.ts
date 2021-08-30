import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiURL = 'https://dummyapi.io/data/v1';

  constructor(private http: HttpClient) { }

  getUsers(page: number) {
    return this.http.get<any>(`${this.apiURL}/user?page=${page}&limit=5`);
  }
  //'/features/:id/:username'
  getUser(id: string) {
    return this.http.get<any>(`${this.apiURL}/user/${id}`);
  }
}
