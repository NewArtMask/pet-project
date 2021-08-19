import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  offset = 0;
  users: any;
  waitOnResponse = false;
  filterTerm!: string;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers(this.offset)
      .subscribe(response => {
        this.users = JSON.parse(JSON.stringify(response)).docs;
        this.offset += this.users.length;
      });
  }

  onScroll() {
    if (!this.waitOnResponse) {
      this.waitOnResponse = true;
      this.usersService.getUsers(this.offset)
        .subscribe(response => {
          const docs = JSON.parse(JSON.stringify(response)).docs;
          this.users.push(...docs);
          this.offset += this.users.length;
          this.waitOnResponse = false;
        });
    }
  }
}
