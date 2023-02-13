import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { MuuBotAPIService } from '../muubot-api.service';
import { MatGridList } from '@angular/material/grid-list';
import { MatGridTile } from '@angular/material/grid-list';
@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {

  username: string;
  constructor(private muubotAPI: MuuBotAPIService) { }


  ngOnInit(): void {
    // this.getUserData('muu688');
  }

  userData = null;
  runHistory = null;

  getUserData(username: string): void {
    this.muubotAPI.getUserData(username).subscribe(data => {
      console.log(data);
      this.userData = data;
      this.runHistory = this.userData.runHistory;
    });
  }

}
