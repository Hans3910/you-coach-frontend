import {Topic} from './topic';
import {User} from './user';

export interface Coach {
  coachId: string;
  userInfo: User;
  coachXp: number;
  availability: string;
  introduction: string;
  topicOne: Topic;
  topicTwo: Topic;

}
