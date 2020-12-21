import {Component, OnInit} from '@angular/core';
import {RequestSession} from '../model/request-session';
import {SessionService} from '../services/session.service';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-request-session',
  templateUrl: './request-session.component.html',
  styleUrls: ['./request-session.component.css']
})
export class RequestSessionComponent implements OnInit {
  colorLayout = '#FBC02D';
  title = 'Request a session';
  // @ts-ignore
  requestSession = new RequestSession('', '', '', '', '', '', '');
  allowedDate = new Date().toISOString().split('T')[0];


  constructor(private sessionService: SessionService, private route: Router) {
  }

  ngOnInit(): void {
    this.requestSession.coachId = localStorage.getItem('requestSessionCoach');
    this.requestSession.coacheeId = localStorage.getItem('coacheeId');
    this.setColor();
  }

  newRequestSession(): void {
    localStorage.removeItem('requestSessionCoach');
    this.sessionService.createSession(this.requestSession).subscribe();
    this.route.navigate([`/user/${localStorage.getItem('currentUser')}`]);
  }

  private setColor(): void {
    if (localStorage.getItem('coachId') !== '') {
      console.log('change of color');
      this.colorLayout = '#80CBC4';
    }
  }


}
