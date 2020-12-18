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
  userIsLoggedIn = false;
  isSignInActive = false;
  colorLayout = '#FBC02D';
  colorLayoutSwitchFully = '#EBB52D';

  constructor(private router: Router) {
  }

  logIn(text: string): void {
    this.userIsLoggedIn = true;
    this.isSignInActive = false;
    this.setColor();
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


  private setColor(): void {
    if (localStorage.getItem('coachId') !== '') {
      console.log('change of color');
      this.colorLayout = '#80CBC4';
      this.colorLayoutSwitchFully = '#7ABFB9';
    }
  }
}
