import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Coach} from '../model/Coach';

@Injectable({
  providedIn: 'root'
})
export class CoachService {

  private url = 'http://localhost:8080/coach';

  constructor(private http: HttpClient) {
  }

  public getCoachById(coachId: string): Observable<Coach> {
    return this.http.get<Coach>(`${this.url}/${coachId}`);
  }

  public updateCoach(coach: Coach): Observable<Coach> {
    return this.http.post<Coach>(`${this.url}/${coach.coachId}`, coach);
  }
}
