import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  changeColorSandwich = false;
  changeColorHome = false;
  changeColorUsers = false;
  changeColorLanguages = false;
  menuVisible = false;
  dropdownVisible = false;
  languages: string[] = [
    'de',
    'en',
    'ua'
  ];

  constructor(public translate: TranslateService) {
    translate.currentLang = 'en';
  }

  chooseLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit(): void {
  }

}
