export class RequestSession {
  coacheeId: string | null;
  coachId: string | null;
  subject: string;
  requestedDate: string;
  requestedTime: string;
  location: string;
  remarks: string;


  constructor(coacheeId: string, coachId: string, subject: string,
              requestedDate: string, requestedTime: string, location: string, remarks: string) {
    this.coacheeId = coacheeId;
    this.coachId = coachId;
    this.subject = subject;
    this.requestedDate = requestedDate;
    this.requestedTime = requestedTime;
    this.location = location;
    this.remarks = remarks;
  }
}
