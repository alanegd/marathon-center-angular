import { Component, OnInit } from '@angular/core';
import { Participant } from "../../model/participant";
import { Center } from "../../model/center";
import { ParticipantsService } from "../../services/participants.service";
import { CentersService } from "../../services/centers.service";

@Component({
  selector: 'app-marathon-winner',
  templateUrl: './marathon-winner.component.html',
  styleUrls: ['./marathon-winner.component.css']
})

export class MarathonWinnerComponent implements OnInit {
  participant: Participant;
  center: Center;

  constructor(
    private participantsService: ParticipantsService,
    private centersService: CentersService
  ) {
    this.participant = {} as Participant;
    this.center = {} as Center;
  }

  private getParticipant(): void {
    this.participantsService.getList().subscribe(participants => {
      const winner = participants.find(p => p.ranking === 1);
      if (winner) {
        this.participant = winner;
        console.log(this.participant);
      }
    });
  }

  private getCenter(): void {
    this.centersService.getList().subscribe(centers => {
      const center = centers.find(c => c.id === this.participant.centerId);
      if (center) {
        this.center = center;
        console.log(this.center);
      }
    });
  }


  ngOnInit(): void {
    this.getParticipant();
    this.getCenter();
  }
}
