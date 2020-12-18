import {Component, OnChanges, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit {
  title = 'You-Coach';
  // @ts-ignore
  currentUser: string | null;
  profileUrl = '';
  userIsLoggedIn = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // this.currentUser = localStorage.getItem('currentUser');
    // this.profileUrl = `/user/${localStorage.getItem('currentUser')}`;
  }

  ngOnChanges(): void {
    // this.currentUser = localStorage.getItem('currentUser');
    // this.profileUrl = `/user/${localStorage.getItem('currentUser')}`;
    // console.log('changes are welcome');
  }

  logIn(text: string): void {
    this.userIsLoggedIn = !this.userIsLoggedIn;
    console.log(text);
  }

  navigateToProfile(): void {
    this.router.navigate([`/user/${localStorage.getItem('currentUser')}`]);
  }
}
