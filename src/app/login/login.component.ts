import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = true;
  userModel = {
    username: '', password: '', password2: ''
  };

  constructor(
    private userService: UserService,
    private router: Router
          ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.login) {
      this.userService.Login(this.userModel).subscribe(
        res => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('username', this.userModel.username);
          this.router.navigate(['/home-page']);
        }
      );
    } else {
      this.userService.Register(this.userModel).subscribe();
      this.router.navigate(['/home-page']);
    }

  }
}
