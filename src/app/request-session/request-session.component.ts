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
  requestSession = new RequestSession('fa6f0fce-a3c3-453c-827b-cd3579ebb576', '123e4567-e89b-42d3-a456-556642440000', '', '', '', '', '');
  allowedDate = new Date().toISOString().split('T')[0];

  constructor(private sessionService: SessionService) {
  }

  ngOnInit(): void {
  }

  newRequestSession(): void {
    console.log(this.requestSession);
    this.sessionService.createSession(this.requestSession);
  }

  // myFilter = (d: Date | null): boolean => {
  //
  //   const day = (d || new Date());
  //   return day >= Date.now.
  //   // // Prevent Saturday and Sunday from being selected.
  //   // return day !== 0 && day !== 6;
  // }

}
