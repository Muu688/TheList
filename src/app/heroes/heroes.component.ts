import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Queue, QueuedUser } from '../queue';
import { MatSort } from '@angular/material/sort';
import { MatGridList } from '@angular/material/grid-list';
import { MatGridTile } from '@angular/material/grid-list';
import { QueueAPIService } from '../queue-api.service';
import { AngularMaterialModule } from "../angular-material.module";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  queueData = null;
  queue = null;

  displayedColumns: string[] = ['twitchUsername', 'status', 'dateadded'];
  dataSource: MatTableDataSource<QueuedUser>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private queueAPI: QueueAPIService) { }

  tiles: Tile[] = [
    { cols: 3, rows: 1, color: 'lightblue' },
    { cols: 1, rows: 2, color: 'lightgreen' },
    { cols: 1, rows: 1, color: 'lightpink' },
    { cols: 2, rows: 1, color: '#DDBDF1' },
  ];
  ngOnInit(): void {
    this.updateData();
    setInterval(() => {
      this.updateData();
    }, 30000);
  }

  updateData(): void {
    this.queueAPI.getQueue().subscribe(data => {
      this.queueData = data;
      this.queue = this.queueData.queue;
      this.dataSource = new MatTableDataSource(this.queueData.queue.users);
      this.dataSource.sort = this.sort;
    });
  }
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
}
