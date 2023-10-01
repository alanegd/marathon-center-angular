import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Participant} from "../../model/participant";
import {Center} from "../../model/center";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ParticipantsService} from "../../services/participants.service";
import {CentersService} from "../../services/centers.service";

@Component({
  selector: 'app-records-content',
  templateUrl: './records-content.component.html',
  styleUrls: ['./records-content.component.css']
})
export class RecordsContentComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<Participant>();
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'marathonCenter', 'ranking', 'recordTime'];
  centers: Center[] = [];

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false}) sort!: MatSort;

  constructor(private participantService: ParticipantsService, private centersService: CentersService) {

  }

  getAllRecords() {
    this.participantService.getAll().subscribe((response: any) =>{
      this.dataSource.data = this.getBestRecordForEachCenter(response);
    });
  }

  getCenters() {
    this.centersService.getAll().subscribe((response: any) => {
      this.centers = response;
    });
  }

  ngOnInit() {
    this.getAllRecords();
    this.getCenters();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getBestRecordForEachCenter(participants: Participant[]): Participant[] {
    const bestRecordsMap = new Map<number, Participant>();
    participants.forEach((participant) => {
      const id = participant.centerId;
      if (!bestRecordsMap.has(id)) {
        bestRecordsMap.set(id, participant);
      } else {
        const currentBest = bestRecordsMap.get(id);
        if (currentBest && participant.recordTime < currentBest.recordTime) {
          bestRecordsMap.set(id, participant);
        }
      }
    });
    return Array.from(bestRecordsMap.values());
  }

  getCenterName(centerId: number): string {
    const center = this.centers.find((c) => c.id === centerId);
    return center ? center.name : '';
  }
}
