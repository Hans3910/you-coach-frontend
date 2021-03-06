import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-become-a-coach',
  templateUrl: './become-a-coach.component.html',
  styleUrls: ['./become-a-coach.component.css']
})
export class BecomeACoachComponent implements OnInit {
  profileUrl = `user/test`;
  colorLayout = '#FBC02D';
  isCoach = false;
  sessionurl = '';

  constructor() {
  }

  ngOnInit(): void {
    this.profileUrl = `/user/${localStorage.getItem('currentUser')}`;
    this.sessionurl = `/user/coacheeSessions/${localStorage.getItem('coacheeId')}`;
    this.checkRole();
  }

  private checkRole(): void {
    if (localStorage.getItem('coachId') !== '') {
      this.isCoach = true;
    }
  }
}
