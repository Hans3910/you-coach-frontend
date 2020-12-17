import {Component, OnInit} from '@angular/core';
import {RequestSession} from '../model/request-session';
import {SessionService} from '../services/session.service';


@Component({
  selector: 'app-request-session',
  templateUrl: './request-session.component.html',
  styleUrls: ['./request-session.component.css']
})
export class RequestSessionComponent implements OnInit {

  title = 'Request a session';
  requestSession = new RequestSession('fa6f0fce-a3c3-453c-827b-cd3579ebb576', '', '', '', '', '', '');
  allowedDate = new Date().toISOString().split('T')[0];

  constructor(private sessionService: SessionService) {
  }

  ngOnInit(): void {
    this.requestSession.coachId = history.state.data;
  }

  newRequestSession(): void {
    console.log(this.requestSession);
    this.sessionService.createSession(this.requestSession);
  }


}
