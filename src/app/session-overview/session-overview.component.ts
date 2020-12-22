import { Component, OnInit } from '@angular/core';
import {SessionService} from '../services/session.service';
import {RequestSession} from '../model/request-session';


@Component({
  selector: 'app-session-overview',
  templateUrl: './session-overview.component.html',
  styleUrls: ['./session-overview.component.css']
})
export class SessionOverviewComponent implements OnInit {
  displayedColumns: string[] = ['subject', 'status'];
  requestSessions: RequestSession[] = [];
  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.getSessions();
  }

  public getSessions(): void{
    this.sessionService.getAllSessions().subscribe(sessions => this.requestSessions = sessions);
}



}
