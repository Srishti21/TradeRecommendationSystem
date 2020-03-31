import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-stocks',
  templateUrl: './saved-stocks.component.html',
  styleUrls: ['./saved-stocks.component.css']
})
export class SavedStocksComponent implements OnInit {

  savedStockList = [{}];

  constructor() { }

  ngOnInit() {
  }

  //display

}
