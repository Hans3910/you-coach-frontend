import {Coachee} from './Coachee';
import {User} from './user';

export class CoacheeClass implements Coachee {
  coacheeId: string;
  userInfo: User;


  constructor(id: string, user: User) {
    this.coacheeId = id;
    this.userInfo = user;
  }
}
