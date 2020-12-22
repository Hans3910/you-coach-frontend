import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RequestSession} from '../model/request-session';
import {Observable} from 'rxjs';

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

  public getAllSessions(urlComponent: string): Observable<RequestSession[]> {
    return this.http.get<RequestSession[]>(`${this.urlDev}/${urlComponent}`);
  }
}

