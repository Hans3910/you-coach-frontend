import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coach-request-profile-change',
  templateUrl: './coach-request-profile-change.component.html',
  styleUrls: ['./coach-request-profile-change.component.css']
})
export class CoachRequestProfileChangeComponent implements OnInit {
  profileUrl = `user/test`;
  constructor() { }

  ngOnInit(): void {
    this.profileUrl = `/coach/${localStorage.getItem('coachId')}`;
  }

}
