import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoadingController } from '@ionic/angular';
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
    private router: Router,
    private cookieService: CookieService,
    public loadingCtrl: LoadingController
  ) {  }

  ionViewWillEnter(): void {
    if(this.cookieService.check('sugar') == true) {
      this.getUsers();
    } else {
      this.router.navigate(['/login']);
    }
  }

  getUsers(): void {
    this.usersService.getUsers().subscribe(
      (response:any) =>{
        this.users = response.users
      }
    );
  }

}
