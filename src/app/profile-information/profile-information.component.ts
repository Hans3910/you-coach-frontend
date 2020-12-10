import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {User} from '../model/User';
import {UserService} from '../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {UserClass} from '../model/UserClass';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.css']
})
export class ProfileInformationComponent implements OnInit {

  editable = true;
  disableSelect = new FormControl(true);
  user = new UserClass('', '', '', '');
  defaultString = 'emptyField';
  constructor(private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getUserById();
  }

  edit(): void {
    this.editable = !this.editable;
    this.disableSelect.setValue(this.editable);
  }

  public getUserById(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // @ts-ignore
    this.userService.getUser(id).subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
  }
}
