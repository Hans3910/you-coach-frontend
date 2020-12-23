export class RequestSessionOverview {
  sessionId: string;
  coacheeId: string;
  coachId: string;
  subject: string;
  requestedDate: string;
  requestedTime: string;
  location: string;
  remarks: string;
  sessionStatus: string;
  coacheeFullName: string;
  coachFullName: string;
  constructor(sessionId: string, coacheeId: string, coachId: string, subject: string,
              requestedDate: string, requestedTime: string, location: string, remarks: string,
              status: string, coacheeFullName: string, coachFullName: string) {
    this.sessionId = sessionId;
    this.coacheeId = coacheeId;
    this.coachId = coachId;
    this.subject = subject;
    this.requestedDate = requestedDate;
    this.requestedTime = requestedTime;
    this.location = location;
    this.remarks = remarks;
    this.sessionStatus = status;
    this.coacheeFullName = coacheeFullName;
    this.coachFullName = coachFullName;
  }
}
