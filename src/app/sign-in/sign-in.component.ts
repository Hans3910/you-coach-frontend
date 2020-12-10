import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../model/User';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  title = 'Sign in';

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  signIn(email: string): void {
    let loggedInUser: User | undefined;
    this.userService.signIn(email).subscribe(user => loggedInUser = user);
    this.router.navigate([`/user/${loggedInUser?.id}`]);
  }
}
