import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CreateUser} from '../model/create-user';
import {FormControl, Validators} from '@angular/forms';
import {MyErrorStateMatcher} from '../Exceptions/error-state-matcher';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {Coachee} from '../model/Coachee';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() loggedIn = new EventEmitter<string>();

  constructor(private userService: UserService,
              private router: Router) {
  }

  title = 'Register';
  newUser: CreateUser | undefined;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
  }

  register(firstName: string, lastName: string, email: string): void {
    this.newUser = {firstName, lastName, email};
    let loggedInUser: Coachee;
    console.log(this.newUser);
    this.userService.registerUser(this.newUser).subscribe(user => {
      loggedInUser = user;
      console.log(loggedInUser);
      localStorage.setItem('currentUser', loggedInUser.userInfo.userId);
      localStorage.setItem('coacheeId', loggedInUser.coacheeId);
      localStorage.setItem('coachId', loggedInUser.userInfo.coachId);
      this.loggedIn.emit('output works');
      this.router.navigate([`/user/${loggedInUser.userInfo.userId}`]);
    });
}
}
