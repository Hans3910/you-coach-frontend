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
  topicOne: {
    topicId: string,
    name: string,
    fifthGrade: boolean,
    firstGrade: boolean,
    fourthGrade: boolean,
    sixthGrade: boolean,
    secondGrade: boolean,
    thirdGrade: boolean,
    seventhGrade: boolean
  };
  topicTwo: {
    topicId: string,
    name: string,
    fifthGrade: boolean,
    firstGrade: boolean,
    fourthGrade: boolean,
    sixthGrade: boolean,
    secondGrade: boolean,
    thirdGrade: boolean,
    seventhGrade: boolean
  };

}
