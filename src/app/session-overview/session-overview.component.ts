import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SessionService} from '../services/session.service';
import {ActivatedRoute} from '@angular/router';
import {RequestSessionOverview} from '../model/request-session-overview';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-session-overview',
  templateUrl: './session-overview.component.html',
  styleUrls: ['./session-overview.component.css']
})

export class SessionOverviewComponent implements OnInit {

  constructor(private sessionService: SessionService, private route: ActivatedRoute) {
  }

  displayedColumns = ['coachFullName', 'subject', 'requestedDate', 'requestedTime', 'location', 'sessionStatus'];
  displayedColumnsCoach = ['coacheeFullName', 'subject', 'requestedDate', 'requestedTime', 'location', 'sessionStatus'];
  // @ts-ignore
  requestSessions: MatTableDataSource<RequestSessionOverview>;
  // @ts-ignore
  pastRequestedSessions: MatTableDataSource<RequestSessionOverview>;
  profileUrl = `user/test`;
  colorLayout = '#FBC02D';
  isCoach = false;
  pageName = '';
  coachProfileUrl = '';

  @ViewChild(MatSort) sort: MatSort | undefined;

  ngOnInit(): void {
    this.getUpcomingSessions();
    this.getPastSessions();
    this.checkRole();
    this.setColor();
    this.profileUrl = `/user/${localStorage.getItem('currentUser')}`;
    // @ts-ignore
    this.pageName = this.route.snapshot.paramMap.get('sessionoverview');
  }


  public getUpcomingSessions(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const urlComponent = this.route.snapshot.paramMap.get('sessionoverview');

    this.sessionService.getAllUpcomingSessions(`${urlComponent}/${id}`).subscribe(sessions => {
      this.requestSessions = new MatTableDataSource(sessions);
      // @ts-ignore
      this.requestSessions.sort = this.sort;

      console.log(this.requestSessions);
    });

  }

  public getPastSessions(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const urlComponent = this.route.snapshot.paramMap.get('sessionoverview');

    this.sessionService.getAllPastSessions(`${urlComponent}/${id}`).subscribe(sessions => {
      this.pastRequestedSessions = new MatTableDataSource(sessions);
      // @ts-ignore
      this.pastRequestedSessions.sort = this.sort;
    });

  }

  private checkRole(): void {
    if (localStorage.getItem('coachId') !== '') {
      this.isCoach = true;
      this.coachProfileUrl = `/coach/${localStorage.getItem('coachId')}`;
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
