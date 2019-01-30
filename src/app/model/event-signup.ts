export class EventSignUp {

  currentUser: string;
  isGoingToEvent: boolean;
  isMember: boolean;
  isBringingGuest: boolean;
  guestName: string;
  confirmation: boolean; // this is for the sign up form

  constructor() {
    this.currentUser = null;
    this.isGoingToEvent = false;
    this.isMember = false;
    this.isBringingGuest = false;
    this.guestName = null;
    this.confirmation = false;
  }
}
