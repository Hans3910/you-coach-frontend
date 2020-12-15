import {Coachee} from './Coachee';

export class UserClass implements Coachee {
  coacheeId: string;
  userInfo: { userId: string; firstName: string; lastName: string; email: string; pictureUrl: string };


  constructor(id: string, user: { userId: string; firstName: string; lastName: string; email: string; pictureUrl: string }) {
    this.coacheeId = id;
    this.userInfo = user;
  }
}
