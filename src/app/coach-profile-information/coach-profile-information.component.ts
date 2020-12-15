import {Component, OnInit} from '@angular/core';
import {UserClass} from '../model/UserClass';
import {FormControl} from '@angular/forms';
import {CoachClass} from '../model/CoachClass';
import {CoachService} from '../services/coach.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-coach-profile-information',
  templateUrl: './coach-profile-information.component.html',
  styleUrls: ['./coach-profile-information.component.css']
})
export class CoachProfileInformationComponent implements OnInit {
  editable = true;
  disableSelect = new FormControl(true);
  user = new UserClass('', {userId: '', firstName: '', lastName: '', email: '', pictureUrl: ''});
  coach = new CoachClass('', '', 0, {
    topicId: '',
    name: '',
    fifthGrade: false,
    firstGrade: false,
    fourthGrade: false,
    secondGrade: false,
    seventhGrade: false,
    sixthGrade: false,
    thirdGrade: false
  }, {
    topicId: '',
    name: '',
    fifthGrade: false,
    firstGrade: false,
    fourthGrade: false,
    secondGrade: false,
    seventhGrade: false,
    sixthGrade: false,
    thirdGrade: false
  }, {userId: '', firstName: '', lastName: '', email: '', pictureUrl: ''});
  defaultString = 'emptyField';
  defaultPicture = 'assets/defaultProfile.svg';

  constructor(private coachService: CoachService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getCoach();
  }

  public getCoach(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // @ts-ignore
    this.coachService.getCoachById(id).subscribe(coach => {
      this.coach = coach;
      console.log(this.coach);
    });
  }
}
