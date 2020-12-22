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

export class SessionOverviewComponent implements OnInit, AfterViewInit {

  constructor(private sessionService: SessionService, private route: ActivatedRoute) {
  }

  displayedColumns = ['coachFullName', 'subject', 'requestedDate', 'requestedTime', 'location', 'sessionStatus'];
  // @ts-ignore
  requestSessions: MatTableDataSource<RequestSessionOverview>;
  profileUrl = `user/test`;
  colorLayout = '#FBC02D';
  isCoach = false;

  @ViewChild(MatSort) sort: MatSort | undefined;

  ngOnInit(): void {
    this.getSessions();
    this.checkRole();
    this.profileUrl = `/user/${localStorage.getItem('currentUser')}`;
  }

  // tslint:disable-next-line:typedef
  ngAfterViewInit() {
    // @ts-ignore
  }

  public getSessions(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const urlComponent = this.route.snapshot.paramMap.get('sessionoverview');

    this.sessionService.getAllSessions(`${urlComponent}/${id}`).subscribe(sessions => {
      this.requestSessions = new MatTableDataSource(sessions);
      // @ts-ignore
      this.requestSessions.sort = this.sort;

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
