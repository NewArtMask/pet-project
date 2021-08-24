import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  page = 0;
  users: any;
  waitOnResponse = false;
  filterTerm!: string;
  constructor(private usersService: UsersService, public translate: TranslateService) { }

  ngOnInit(): void {
    this.usersService.getUsers(this.page)
      .subscribe(response => {
        const { data }: any = { ...response };
        this.users = data;
        ++this.page;
      },
        error => {
          console.error('There was an error!', error);
        });
  }

  onScroll() {
    if (!this.waitOnResponse) {
      this.waitOnResponse = true;
      this.usersService.getUsers(this.page)
        .subscribe(response => {
          const { data }: any = { ...response };
          this.users.push(...data);
          ++this.page;
          this.waitOnResponse = false;
        },
          error => {
            console.error('There was an error!', error);
          });
    }
  }
}
