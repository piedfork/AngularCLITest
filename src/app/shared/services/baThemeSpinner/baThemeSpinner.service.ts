import { Injectable } from '@angular/core';
import * as jQuery from 'jquery';

@Injectable()
export class BaThemeSpinner {

  private _selector: string = '#preloader';
  private _element: JQuery;

  constructor() {
    this._element = jQuery(this._selector);
  }

  public show(): void {
    this._element.show();
  }

  public hide(delay: number = 0): void {
    setTimeout(() => {
      this._element.hide();
    }, delay);
  }
}
