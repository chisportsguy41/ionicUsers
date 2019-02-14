import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  cookieExists: boolean;
  public appPages = [
    {
      title: 'Log In',
      url: '/login',
      icon: 'log-in'
    },
    {
      title: 'Register',
      url: '/register',
      icon: 'person-add'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private cookieService: CookieService
  ) {
    this.initializeApp();
    this.cookieExists = this.cookieService.check('sugar');
    
    if(this.cookieExists) {
      this.appPages = [
        {
          title: 'Users',
          url: '/users',
          icon: 'people'
        },
        {
          title: 'Log Out',
          url: '/logout',
          icon: 'log-out'
        }
      ]
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
