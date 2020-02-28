import { Component, OnInit } from '@angular/core';
import { AuthService } from '../providers/auth.service';
import { User } from '../entity/user';
import { UserService } from '../providers/user-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = new User();


  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  login() {

    this.authService.login(this.user).then(data => {
      if (data != undefined) {
        this.userService.user = data;
        this.router.navigate(['/publications']);
        //this.router.navigate(['/sales']);

      }

    });
  }

}
