import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { UsersService } from '../users.service';
import { User } from '../users';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.page.html',
  styleUrls: ['./user-delete.page.scss'],
})
export class UserDeletePage implements OnInit {
  user: User;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params)=> {
      this.getUser(params['id']);
    });
  }

  getUser(id:string): void {
    this.usersService.getUser(id).subscribe(
      (response:any)=>{
        this.user = response.user
      }
    );
  }

  deleteUser(): void {
    if(confirm("Are you sure you want to delete " + this.user.username + "?")) {
      this.usersService.deleteUser(this.user._id).subscribe(
        ()=>{this.router.navigateByUrl('/users')}
      );
    }
  }

}
