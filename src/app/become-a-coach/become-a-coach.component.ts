import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-become-a-coach',
  templateUrl: './become-a-coach.component.html',
  styleUrls: ['./become-a-coach.component.css']
})
export class BecomeACoachComponent implements OnInit {
  profileUrl = `user/test`;

  constructor() { }

  ngOnInit(): void {
    this.profileUrl = `/user/${localStorage.getItem('currentUser')}`;
  }

}
