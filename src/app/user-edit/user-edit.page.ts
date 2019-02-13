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

  ionViewWillEnter(): void {
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
      this.router.navigate(['/user-view', response.user._id]);
    }
  }

  onSubmit(): void {
    this.usersService.editUser(this.user).subscribe(
      (response)=>{
        this.response(response)
      }
    );
  }

}
