import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="wrapper">
    <app-header></app-header>
      <div class="main">
        <router-outlet></router-outlet>
      </div>
    <app-footer></app-footer>
  </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }
