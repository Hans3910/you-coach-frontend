import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {CoacheeClass} from '../model/CoacheeClass';
import {CoachClass} from '../model/CoachClass';
import {CoachService} from '../services/coach.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-coach-detail',
  templateUrl: './coach-detail.component.html',
  styleUrls: ['./coach-detail.component.css']
})
export class CoachDetailComponent implements OnInit {
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
  colorLayout = '#FBC02D';

  constructor(private router: Router, private coachService: CoachService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getCoach();
    this.setColor();
  }

  public getCoach(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // @ts-ignore
    this.coachService.getCoachById(id).subscribe(coach => {
      this.coach = coach;
      localStorage.setItem('requestSessionCoach', this.coach.coachId);
      console.log(this.coach);
    });
  }


  requestSession(): void {
    // this.router.navigateByUrl('/requestsession', {state: {coachId: this.coach.coachId}});
    this.router.navigate(['/requestsession']);
  }

  private setColor(): void {
    if (localStorage.getItem('coachId') !== '') {
      console.log('change of color');
      this.colorLayout = '#80CBC4';
    }
  }
}
