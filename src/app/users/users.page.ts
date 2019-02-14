import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { UsersService } from '../users.service';
import { User } from '../users';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage {
  users: User;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {  }

  ionViewWillEnter(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.usersService.getUsers().subscribe(
      (response:any) =>{
        this.users = response.users
      }
    );
  }

}
