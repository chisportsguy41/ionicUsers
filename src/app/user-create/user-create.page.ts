import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { UsersService } from '../users.service';
import { User } from '../users';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.page.html',
  styleUrls: ['./user-create.page.scss'],
})
export class UserCreatePage implements OnInit {
  user: User = new User();
  errors: any = {};
  errorMessage: string;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  response(response): void {
    if(response.success===false){
      console.log(response.error.errors);
      
      if( response.error.errors.username.kind == 'required' ){
        this.errors.username = 'Please enter a username';
      }

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

  onSubmit(): void {
    this.usersService.createUser(this.user).subscribe(
      (response)=>{
        this.response(response)
      }
    );
  }

}
