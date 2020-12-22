import {Component, OnInit} from '@angular/core';
import {SessionService} from '../services/session.service';
import {RequestSession} from '../model/request-session';
import {ActivatedRoute} from '@angular/router';
import {RequestSessionOverview} from "../model/request-session-overview";


@Component({
  selector: 'app-session-overview',
  templateUrl: './session-overview.component.html',
  styleUrls: ['./session-overview.component.css']
})
export class SessionOverviewComponent implements OnInit {
  displayedColumns = ['coach', 'subject', 'date', 'time', 'location', 'status'];
  requestSessions: RequestSessionOverview[] = [];
  profileUrl = `user/test`;
  colorLayout = '#FBC02D';
  isCoach = false;

  constructor(private sessionService: SessionService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getSessions();
    this.checkRole();
    this.profileUrl = `/user/${localStorage.getItem('currentUser')}`;
  }

  public getSessions(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const urlComponent = this.route.snapshot.paramMap.get('sessionoverview');

    this.sessionService.getAllSessions(`${urlComponent}/${id}`).subscribe(sessions => {
      this.requestSessions = sessions;
      console.log(this.requestSessions);
    });

  }

  private checkRole(): void {
    if (localStorage.getItem('coachId') !== '') {
      this.isCoach = true;
    } else {
      this.isCoach = false;
    }
  }

  private setColor(): void {
    if (localStorage.getItem('coachId') !== '') {
      console.log('change of color');
      this.colorLayout = '#80CBC4';
    } else {
      this.colorLayout = '#FBC02D';
    }
  }
}
