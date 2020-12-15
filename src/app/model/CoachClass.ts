import {Coach} from './Coach';

export class CoachClass implements Coach {
  availability: string;
  coachId: string;
  coachXp: number;
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
  userInfo: { userId: string; firstName: string; lastName: string; email: string; pictureUrl: string };


  constructor(availability: string, coachId: string, coachXp: number,
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
              userInfo: { userId: string; firstName: string; lastName: string; email: string; pictureUrl: string }) {
    this.availability = availability;
    this.coachId = coachId;
    this.coachXp = coachXp;
    this.topicOne = topicOne;
    this.topicTwo = topicTwo;
    this.userInfo = userInfo;
  }
}
