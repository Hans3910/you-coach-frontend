import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Coachee} from '../model/Coachee';
import {UserService} from '../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {CoacheeClass} from '../model/CoacheeClass';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.css']
})
export class ProfileInformationComponent implements OnInit {

  editable = true;
  disableSelect = new FormControl(true);
  coachee = new CoacheeClass('', {
    userId: '',
    firstName: '',
    lastName: '',
    email: '',
    pictureUrl: '',
    coacheeId: '',
    coachId: '',
    role: ''
  });
  defaultString = 'emptyField';
  defaultPicture = 'assets/defaultProfile.svg';
  isCoach = false;
  colorLayout = '#FBC02D';


  constructor(private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getUserById();
    this.setColor();
    this.checkRole();
  }

  edit(): void {
    this.editable = !this.editable;
    this.disableSelect.setValue(this.editable);
  }

  public getUserById(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // @ts-ignore
    this.userService.getUser(id).subscribe(user => {
      this.coachee = user;
      console.log(this.coachee);
    });
  }

  public cancel(): void {
    this.getUserById();
    this.edit();
  }

  public editUser(): void {
    console.log(this.coachee);
    this.userService.editUser(this.coachee).subscribe(user => {
      this.coachee = user;
      this.edit();
    });
  }

  private setColor(): void {
    if (localStorage.getItem('coachId') !== '') {
      console.log('change of color');
      this.colorLayout = '#80CBC4';
    }
  }

  private checkRole(): void {
    if (localStorage.getItem('coachId') !== '') {
      this.isCoach = true;
    }
  }
}
