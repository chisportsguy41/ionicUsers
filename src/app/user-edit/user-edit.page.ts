import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { UsersService } from '../users.service';
import { User } from '../users';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.page.html',
  styleUrls: ['./user-edit.page.scss'],
})
export class UserEditPage implements OnInit {
  user: User;
  errors: any = {};
  errorMessage: string;
  private id: string;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getUser(this.id);
  }

  getUser(id:string): void {
    this.usersService.getUser(id).subscribe(
      (response:any)=>{
        this.user = response.user
      }
    );
  }

  response(response): void {
    if(response.success===false){
      if( response.error.errors.kind == 'unique' ){
        this.errors.username = 'A user with the given username is already registered';
      }

      if( response.error.errors.email ){
        this.errors.email = response.error.errors.email.message;
      }
    }

    if(response.success===true) {
      this.router.navigate(['/user-view/', response.user._id]);
    }
  }

  deleteUser(): void {
    if(confirm("Are you sure you want to delete " + this.user.username + "?")) {
      this.usersService.deleteUser(this.id).subscribe(
        ()=>{this.router.navigate(['/users'])}
      );
    }
  }

  onSubmit(): void {
    this.usersService.editUser(this.user).subscribe(
      (response)=>{
        console.log(response)
        this.response(response)
      }
    );
  }

}