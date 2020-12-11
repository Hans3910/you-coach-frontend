import {User} from './User';

export class UserClass implements User {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  pictureUrl: string;


  constructor(email: string, firstName: string, id: string, lastName: string, pictureUrl: string) {
    this.email = email;
    this.firstName = firstName;
    this.id = id;
    this.lastName = lastName;
    this.pictureUrl = pictureUrl;
  }
}
