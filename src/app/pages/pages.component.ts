import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

import { PAGES_MENU } from './pages.menu';
import { BaMenuService } from '../shared';

@Component({
  selector: 'app-pages',
  template: `
      <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="c-ui c-ui--main">
      <div class="c-ui__content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
      <footer class="c-ui__footer">
        <div class="c-ui__item c-ui__item--right">
          <p class="mb-0"><small>&copy; Fluxys - All rights reserved</small></p>
        </div>
      </footer>
    </div>
    <ba-back-top position="200"></ba-back-top>
    `
})
export class PagesComponent implements OnInit {

  constructor(private _menuService: BaMenuService) {
  }

  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }
}
