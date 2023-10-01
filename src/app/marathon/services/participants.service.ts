import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Participant} from "../model/participant";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService extends BaseService<Participant> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = "/participants";
  }
}
