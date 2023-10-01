export class Participant {
  id: number;
  firstName: string;
  lastName: string;
  photoUrl: string;
  centerId: number;
  ranking: number;
  recordTime: Date ;

  constructor() {
    this.id = 0;
    this.firstName = "";
    this.lastName = "";
    this.photoUrl = "";
    this.centerId = 0;
    this.ranking = 0;
    this.recordTime = new Date(0);
  }
}
