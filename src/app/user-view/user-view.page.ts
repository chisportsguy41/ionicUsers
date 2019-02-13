import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { UsersService } from '../users.service';
import { User } from '../users';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.page.html',
  styleUrls: ['./user-view.page.scss'],
})
export class UserViewPage implements OnInit {
  user: User;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params)=> {this.getUser(params['id']);
    });
  }

  ionViewWillEnter(): void {
    this.route.params.subscribe(
      (params)=> {this.getUser(params['id']);
    });
  }

  getUser(id:string): void {
    this.usersService.getUser(id).subscribe(
      (response:any)=>{
        this.user = response.user
      }
    );
  }

}
