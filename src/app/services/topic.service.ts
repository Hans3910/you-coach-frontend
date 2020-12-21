import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TopicName} from '../model/TopicName';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private url = 'https://you-coach-team-athos.herokuapp.com/topics';

  constructor(private http: HttpClient) {
  }

  public getAllTopics(): Observable<TopicName[]> {
    return this.http.get<TopicName[]>(this.url);
  }
}

