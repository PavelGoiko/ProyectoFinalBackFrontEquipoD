import { Component, OnInit } from '@angular/core';
import { AuthService } from '../providers/auth.service';
import { UserService } from '../providers/user-service.service';
import { Router } from '@angular/router';
import { User } from '../entity/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: User = new User();

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  register() {
    
    this.authService.register(this.user).then(data => {

      this.userService.user = data;
      this.router.navigate(['/publications']);

    });
  }

}
