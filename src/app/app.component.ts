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
  isRegisterActive = false;
  colorLayout = '#FBC02D';
  colorLayoutSwitchFully = '#EBB52D';
  isCoach = false;

  constructor(private router: Router) {
  }

  logIn(text: string): void {
    this.userIsLoggedIn = true;
    this.isSignInActive = false;
    this.isRegisterActive = false;
    this.setColor();
    this.checkRole();
  }

  navigateToProfile(): void {
    this.router.navigate([`/user/${localStorage.getItem('currentUser')}`]);
  }

  signIn(): void {
    this.isSignInActive = !this.isSignInActive;
    this.isRegisterActive = false;
  }

  register(): void {
    this.isRegisterActive = !this.isRegisterActive;
    this.isSignInActive = false;
  }

  navigateToHome(): void {
    this.isSignInActive = false;
    this.isRegisterActive = false;
  }

  logOut(): void {
    this.userIsLoggedIn = false;
    localStorage.clear();
    this.router.navigate(['/home']);
    this.colorLayout = '#FBC02D';
    this.colorLayoutSwitchFully = '#EBB52D';
  }


  private setColor(): void {
    if (localStorage.getItem('coachId') !== '') {
      console.log('change of color');
      this.colorLayout = '#80CBC4';
      this.colorLayoutSwitchFully = '#7ABFB9';
    } else {
      this.colorLayout = '#FBC02D';
      this.colorLayoutSwitchFully = '#FBC02D';
    }
  }

  navigateToCoachProfile(): void {
    this.router.navigate([`/coach/${localStorage.getItem('coachId')}`]);
  }

  private checkRole(): void {
    if (localStorage.getItem('coachId') !== '') {
      this.isCoach = true;
    } else {
      this.isCoach = false;
    }

  }
}
