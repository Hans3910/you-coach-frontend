import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CreateUser} from '../model/create-user';
import {Observable} from 'rxjs';
import {User} from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {
  }

  public registerUser(user: CreateUser): Observable<CreateUser> {
    return this.http.post<CreateUser>(this.url, user);
  }

  public signIn(email: string): Observable<User> {
    return this.http.get<User>(`${this.url}/signIn?email=${email}`);
  }
}
