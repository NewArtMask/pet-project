import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { UsersService } from '../service/users.service';

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
  userItem!: any
  constructor(private usersService: UsersService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.usersService.getUsers(this.page)
      .subscribe(response => {
        const { data }: any = { ...response };
        this.users = data;
        ++this.page;
        this.spinner.hide();
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
        });
    }
  }
}
