import {Topic} from './topic';

export interface Coach {
  coachId: string;
  userInfo: {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    pictureUrl: string;
  };
  coachXp: number;
  availability: string;
  introduction: string;
  topicOne: Topic;
  topicTwo: Topic;

}
