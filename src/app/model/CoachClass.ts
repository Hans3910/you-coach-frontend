import {Coach} from './Coach';
import {User} from './user';

export class CoachClass implements Coach {
  availability: string;
  coachId: string;
  coachXp: number;
  introduction: string;
  topicOne: {
    topicId: string; name: string; fifthGrade: boolean;
    firstGrade: boolean; fourthGrade: boolean; sixthGrade: boolean;
    secondGrade: boolean; thirdGrade: boolean; seventhGrade: boolean
  };
  topicTwo: {
    topicId: string; name: string; fifthGrade: boolean;
    firstGrade: boolean; fourthGrade: boolean; sixthGrade: boolean;
    secondGrade: boolean; thirdGrade: boolean; seventhGrade: boolean
  };
  userInfo: User;


  constructor(availability: string, coachId: string, coachXp: number, introduction: string,
              topicOne: {
                topicId: string; name: string; fifthGrade: boolean; firstGrade: boolean;
                fourthGrade: boolean; sixthGrade: boolean; secondGrade: boolean; thirdGrade: boolean;
                seventhGrade: boolean
              },
              topicTwo: {
                topicId: string; name: string; fifthGrade: boolean; firstGrade: boolean;
                fourthGrade: boolean; sixthGrade: boolean; secondGrade: boolean; thirdGrade: boolean;
                seventhGrade: boolean
              },
              userInfo: User) {
    this.availability = availability;
    this.coachId = coachId;
    this.coachXp = coachXp;
    this.topicOne = topicOne;
    this.topicTwo = topicTwo;
    this.userInfo = userInfo;
    this.introduction = introduction;
  }
}
