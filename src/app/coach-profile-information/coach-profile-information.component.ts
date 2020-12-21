import {Component, OnInit} from '@angular/core';
import {CoacheeClass} from '../model/CoacheeClass';
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
  disableProfile = new FormControl(true);
  disableTopics = new FormControl(true);
  coach = new CoachClass('', '', 0, '', {
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
  }, {userId: '', firstName: '', lastName: '', email: '', pictureUrl: '', coacheeId: '', coachId: '', role: ''});
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

  editCoach(): void {
    console.log(this.coach);
    this.coachService.updateCoach(this.coach).subscribe(coach => {
      this.coach = coach;
    });
    if (!this.disableProfile.value) {
      this.disableProfile.setValue(true);
    }
    if (!this.disableTopics.value) {
      this.disableTopics.setValue(true);
    }
  }

  cancel(): void {
    this.getCoach();
  }

  editProfile(): void {
    this.disableProfile.setValue(!this.disableProfile.value);
  }

  editTopic(): void {
    this.disableTopics.setValue(!this.disableTopics.value);
  }

  topicOneFirstGrade(): void {
    this.coach.topicOne.firstGrade = !this.coach.topicOne.firstGrade;
  }

  topicOneSecondGrade(): void {
    this.coach.topicOne.secondGrade = !this.coach.topicOne.secondGrade;
  }

  topicOneThirdGrade(): void {
    this.coach.topicOne.thirdGrade = !this.coach.topicOne.thirdGrade;
  }

  topicOneFourthGrade(): void {
    this.coach.topicOne.fourthGrade = !this.coach.topicOne.fourthGrade;
  }

  topicOneFifthGrade(): void {
    this.coach.topicOne.fifthGrade = !this.coach.topicOne.fifthGrade;
  }

  topicOneSixthGrade(): void {
    this.coach.topicOne.sixthGrade = !this.coach.topicOne.sixthGrade;
  }

  topicOneSeventhGrade(): void {
    this.coach.topicOne.seventhGrade = !this.coach.topicOne.seventhGrade;
  }

  topicTwoFirstGrade(): void {
    this.coach.topicTwo.firstGrade = !this.coach.topicTwo.firstGrade;
  }

  topicTwoSecondGrade(): void {
    this.coach.topicTwo.secondGrade = !this.coach.topicTwo.secondGrade;
  }

  topicTwoThirdGrade(): void {
    this.coach.topicTwo.thirdGrade = !this.coach.topicTwo.thirdGrade;
  }

  topicTwoFourthGrade(): void {
    this.coach.topicTwo.fourthGrade = !this.coach.topicTwo.fourthGrade;
  }

  topicTwoFifthGrade(): void {
    this.coach.topicTwo.fifthGrade = !this.coach.topicTwo.fifthGrade;
  }

  topicTwoSixthGrade(): void {
    this.coach.topicTwo.sixthGrade = !this.coach.topicTwo.sixthGrade;
  }

  topicTwoSeventhGrade(): void {
    this.coach.topicTwo.seventhGrade = !this.coach.topicTwo.seventhGrade;
  }


}
