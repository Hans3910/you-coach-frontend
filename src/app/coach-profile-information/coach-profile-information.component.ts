import { Component, OnInit } from '@angular/core';
import {UserClass} from '../model/UserClass';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-coach-profile-information',
  templateUrl: './coach-profile-information.component.html',
  styleUrls: ['./coach-profile-information.component.css']
})
export class CoachProfileInformationComponent implements OnInit {
  editable = true;
  disableSelect = new FormControl(true);
  user = new UserClass('', '', '', '', '');
  defaultString = 'emptyField';
  defaultPicture = 'assets/defaultProfile.svg';
  constructor() { }

  ngOnInit(): void {
  }
}
