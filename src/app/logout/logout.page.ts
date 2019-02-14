import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage {
  errorMessage: string;

  constructor(
    private router: Router, 
    private authService: AuthService,
    private cookieService: CookieService
  ) { }

  ionViewWillEnter() {
    this.logOut();
  }
 
  logOut(): void {
    this.authService.logOut().subscribe(
      (response:any) => {
        this.cookieService.delete('sugar', '/');
        window.location.href = '/ionicUsers#users';
      }
    );
  }

}
