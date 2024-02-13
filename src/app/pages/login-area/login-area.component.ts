import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login-area',
  templateUrl: './login-area.component.html',
  styleUrls: ['./login-area.component.css']
})
export class LoginAreaComponent {

  username: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      this.authService.login(); 
      this.router.navigate(['/fav']);
    } else {
      this.loginError = 'Invalid username or password.';
    }
  }

  redirectToHome() {
    this.router.navigate(['']);
  }
}
