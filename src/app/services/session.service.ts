import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RequestSession} from '../model/request-session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  url = 'http://localhost:8080/sessions';

  constructor(private http: HttpClient) {
  }

  createSession(requestSession: RequestSession): void {
    this.http.post<RequestSession>(this.url, requestSession);
  }
}
