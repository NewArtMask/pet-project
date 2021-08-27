import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <ngx-spinner [fullScreen]="false" type="timer" size="medium" color="#4d7d93" bdColor="rgba(255, 255, 255, 0)">
      <p class="loading">{{ 'loader.loadingText' | translate }}</p>
    </ngx-spinner>
  `,
  styles: [`
    .loading {
      margin-top: 50px;
    }
  `]
})
export class LoaderComponent { }
