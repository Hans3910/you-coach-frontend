import {Component, OnInit} from '@angular/core';
import {RequestSession} from '../model/request-session';



@Component({
  selector: 'app-request-session',
  templateUrl: './request-session.component.html',
  styleUrls: ['./request-session.component.css']
})
export class RequestSessionComponent implements OnInit {

  title = 'Request a session';
  requestSession = new RequestSession('', '', '', '', '', '', '');
  allowedDate = new Date().toISOString().split('T')[0];

  constructor() {
  }

  ngOnInit(): void {
  }

  newRequestSession(): void {
    console.log(this.requestSession);
  }

  // myFilter = (d: Date | null): boolean => {
  //
  //   const day = (d || new Date());
  //   return day >= Date.now.
  //   // // Prevent Saturday and Sunday from being selected.
  //   // return day !== 0 && day !== 6;
  // }

}
