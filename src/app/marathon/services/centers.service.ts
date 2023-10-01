import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Center} from "../model/center";
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CentersService  extends BaseService<Center>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = "/centers";
  }
}
