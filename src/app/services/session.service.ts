import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RequestSession} from '../model/request-session';
import {Observable} from 'rxjs';
import {RequestSessionOverview} from '../model/request-session-overview';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  url = 'https://you-coach-team-athos.herokuapp.com/sessions';
  urlDev = 'http://localhost:8080/sessions';

  constructor(private http: HttpClient) {
  }

  createSession(requestSession: RequestSession): Observable<RequestSession> {
    console.log(requestSession);
    return this.http.post<RequestSession>(this.url, requestSession);
  }

  public getAllUpcomingSessions(urlComponent: string): Observable<RequestSessionOverview[]> {
    return this.http.get<RequestSessionOverview[]>(`${this.urlDev}/${urlComponent}`);
  }

  public getAllPastSessions(urlComponent: string): Observable<RequestSessionOverview[]> {
    return this.http.get<RequestSessionOverview[]>(`${this.urlDev}/${urlComponent}/past`);
  }
}

