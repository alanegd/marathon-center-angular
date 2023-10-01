import { Component } from '@angular/core';
import {Participant} from "../../model/participant";
import {Center} from "../../model/center";

@Component({
  selector: 'app-marathon-winner',
  templateUrl: './marathon-winner.component.html',
  styleUrls: ['./marathon-winner.component.css']
})
export class MarathonWinnerComponent {
  participant: Participant = {} as Participant;
  center: Center = {} as Center;
}
