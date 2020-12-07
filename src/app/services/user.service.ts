import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CreateUser} from '../model/create-user';
import {Observable} from 'rxjs';

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
}
