import { Component } from '@angular/core';

import { GlobalState, GlobalEventType } from '../../../global.state';

import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import 'style-loader!./baPageTop.scss';

@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html'
})
export class BaPageTopComponent {

  public selectedGasDay: NgbDateStruct;

  public isMenuCollapsed: boolean = false;

  constructor(private state: GlobalState) {    
    this.initializeSelectedGasDayToToday();

    this.state.subscribe(GlobalEventType.MenuCollapsingChanged, (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  private initializeSelectedGasDayToToday() {
    let today = new Date();
    this.selectedGasDay = { day: today.getDate(), month: today.getMonth() + 1, year: today.getFullYear() };
    this.changeGasDay(this.selectedGasDay);
  }

  public changeGasDay(newDate: NgbDateStruct) {
    this.state.notifyDataChanged(GlobalEventType.GasDayChanged, new Date(newDate.year, newDate.month - 1, newDate.day));
  }

  public toggleMenu() {
    this.state.notifyDataChanged(GlobalEventType.MenuCollapsingChanged, !this.isMenuCollapsed);
    return false;
  }
}
