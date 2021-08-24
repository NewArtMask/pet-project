import { Component, Inject, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { ActivatedRoute } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeUk from '@angular/common/locales/uk';
import localeDe from '@angular/common/locales/de';
import { TranslateService } from '@ngx-translate/core';

registerLocaleData(localeUk, 'ua');
registerLocaleData(localeDe, 'de');

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: any;
  id!: string;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      this.usersService.getUser(this.id)
        .subscribe(response => {
          this.user = response;
        },
          error => {
            console.error('There was an error!', error);
          });
    });
  }

}
