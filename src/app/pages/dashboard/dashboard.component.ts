import { Component, OnInit } from '@angular/core';

import { GlobalState, GlobalEventType } from 'app/global.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  param = {value: 'brave'};
  chartData: Array<any>;
  title: string;
  selectedGasDay: Date;

  constructor(private state: GlobalState) {
     this.state.subscribe(GlobalEventType.GasDayChanged, (newGasDate) => {
      this.selectedGasDay = newGasDate;
    });
  }

  ngOnInit() {
    this.title = 'Loading the dashboard.';
    // give everything a chance to get loaded before starting the animation to reduce choppiness
    // setTimeout(() => {
    //   this.generateData();

    //   // change the data periodically
    //   setInterval(() => this.generateData(), 3000);
    // }, 1000);
  }

  // generateData() {
  //   this.chartData = [];
  //   for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
  //     this.chartData.push([
  //       `Index ${i}`,
  //       Math.floor(Math.random() * 100)
  //     ]);
  //   }
  //}
}
