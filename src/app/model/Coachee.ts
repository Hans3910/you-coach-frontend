export interface Coachee {
  coacheeId: string;
  userInfo: {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    pictureUrl: string;
  };
}
