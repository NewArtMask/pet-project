import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  componentsNames = 'Header, Footer';
  numOfItems = '5';
  httpAdresse = 'https://dummyapi.io/data/v1';
  urlForUserPage = '/features/:id/:username';

  constructor() { }

  ngOnInit(): void {
  }

}
