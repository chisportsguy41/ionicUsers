import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';

import { UsersService } from '../users.service';
import { User } from '../users';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.page.html',
  styleUrls: ['./user-view.page.scss'],
})
export class UserViewPage {
  user: User;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
    private cookieService: CookieService 
  ) { }

  ionViewWillEnter(): void {
    if(this.cookieService.check('sugar') == true) {
      this.route.params.subscribe(
        (params)=> {this.getUser(params['id']);
      });
    } else {
      this.router.navigate(['/login']);
    }
  }

  getUser(id:string): void {
    this.usersService.getUser(id).subscribe(
      (response:any)=>{
        this.user = response.user
      }
    );
  }

}
