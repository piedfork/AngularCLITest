import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export enum GlobalEventType {
  GasDayChanged,
  MenuItemActivated,
  MenuCollapsingChanged
}

@Injectable()
export class GlobalState {

  private currentState: Object = {};
  private data = new Subject<Object>();
  private dataStream$ = this.data.asObservable();

  private subscriptions: Map<GlobalEventType, Array<Function>> = new Map<GlobalEventType, Array<Function>>();

  constructor() {
    this.dataStream$.subscribe((data) => this._onEvent(data));
  }
  
  getLastEventValue(event: GlobalEventType): any {
    return this.currentState[event];
  }

  notifyDataChanged(event: GlobalEventType, value: any) {
    this.currentState[event] = value;

    let current = this.data[event];
    if (current !== value) {
      this.data[event] = value;

      this.data.next({
        event: event,
        data: this.data[event]
      });
    }
  }

  subscribe(event: GlobalEventType, callback: Function) {
    let subscribers = this.subscriptions.get(event) || [];
    subscribers.push(callback);

    this.subscriptions.set(event, subscribers);
  }

  _onEvent(data: any) {
    let subscribers = this.subscriptions.get(data['event']) || [];

    subscribers.forEach((callback) => {
      callback.call(null, data['data']);
    });
  }
}
