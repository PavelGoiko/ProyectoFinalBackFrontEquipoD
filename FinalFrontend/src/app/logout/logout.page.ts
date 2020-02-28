import { Component, OnInit } from '@angular/core';
import { AuthService } from '../providers/auth.service';
import { UserService } from '../providers/user-service.service';
import { Router } from '@angular/router';
import { User } from '../entity/user';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  user: User = new User();

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router

  ) { }

  ngOnInit() {
  }

  logout() {
      this.userService.user = undefined;
      console.log(this.userService.user);
      this.router.navigate(['/public-publications']);
  }
  
  back(){
    this.router.navigate(['/public-publications']);
  }

}
