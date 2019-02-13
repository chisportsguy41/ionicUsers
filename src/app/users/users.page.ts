import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { UsersService } from '../users.service';
import { User } from '../users';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  users: User;
  hasLoaded: boolean = false;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {  }

  ngOnInit() {
    this.getUsers();
    this.hasLoaded = true;
  }

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
