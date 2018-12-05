import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserService } from './services/auth/auth-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'vestimony-angular-app';

  constructor(
    private router: Router,
    private userService: AuthUserService
  ) { }

  logout() {
    this.userService.destroyAcessToken();
    this.router.navigate(['/']);
  }
}
