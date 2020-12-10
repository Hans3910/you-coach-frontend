import {Component, OnInit} from '@angular/core';
import {CreateUser} from '../model/create-user';
import {FormControl, Validators} from '@angular/forms';
import {MyErrorStateMatcher} from '../Exceptions/error-state-matcher';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {User} from '../model/User';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
    let loggedInUser: User;
    console.log(this.newUser);
    this.userService.registerUser(this.newUser).subscribe(user => {
      loggedInUser = user;
      this.router.navigate([`/user/${loggedInUser.id}`]);
    });
}
}
