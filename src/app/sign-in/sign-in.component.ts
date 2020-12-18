import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Coachee} from '../model/Coachee';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  title = 'Sign in';
  @Output() loggedIn = new EventEmitter<string>();

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  signIn(email: string): void {
    let loggedInUser: Coachee | undefined;
    this.userService.signIn(email).subscribe(user => {
      loggedInUser = user;
      console.log(user);
      localStorage.setItem('currentUser', loggedInUser.userInfo.userId);
      localStorage.setItem('coacheeId', loggedInUser.coacheeId);
      this.loggedIn.emit('output works');
      this.router.navigate([`/user/${loggedInUser?.userInfo.userId}`]);
    });

  }
}
