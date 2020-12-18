import {Component, OnChanges, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'You-Coach';
  // @ts-ignore
  currentUser: string | null;
  userIsLoggedIn = true;
  isSignInActive = false;

  constructor(private router: Router) {
  }

  logIn(text: string): void {
    this.userIsLoggedIn = true;
    this.isSignInActive = false;
    console.log(text);
  }

  navigateToProfile(): void {
    this.router.navigate([`/user/${localStorage.getItem('currentUser')}`]);
  }

  signIn(): void {
    this.isSignInActive = !this.isSignInActive;
  }

  logOut(): void {
    this.userIsLoggedIn = false;
    localStorage.clear();
    this.router.navigate(['/home']);
  }
}
