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
        this.users = JSON.parse(JSON.stringify(response)).data;
        ++this.page;
        console.log(this.users);
      });
  }

  onScroll() {
    if (!this.waitOnResponse) {
      this.waitOnResponse = true;
      this.usersService.getUsers(this.page)
        .subscribe(response => {
          const data = JSON.parse(JSON.stringify(response)).data;
          this.users.push(...data);
          ++this.page;
          this.waitOnResponse = false;
        });
    }
  }
}
