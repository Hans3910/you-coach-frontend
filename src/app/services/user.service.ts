import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CreateUser} from '../model/create-user';
import {Observable} from 'rxjs';
import {Coachee} from '../model/Coachee';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://you-coach-team-athos.herokuapp.com/users';

  constructor(private http: HttpClient) {
  }

  public registerUser(user: CreateUser): Observable<Coachee> {
    return this.http.post<Coachee>(this.url, user);
  }

  public signIn(email: string): Observable<Coachee> {
    return this.http.get<Coachee>(`${this.url}/signIn?email=${email}`);
  }

  public getUser(id: string): Observable<Coachee> {
    return this.http.get<Coachee>(`${this.url}/${id}`);
  }

  public editUser(user: Coachee): Observable<Coachee> {
    return this.http.post<Coachee>(`${this.url}/${user.userInfo.userId}`, user);
  }
}
