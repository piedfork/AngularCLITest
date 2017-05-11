import { Component, ElementRef, HostListener, OnInit, AfterViewInit } from '@angular/core';
import { GlobalState, GlobalEventType } from '../../../global.state';
import { layoutSizes } from 'app/styles';

import 'style-loader!./baSidebar.scss';

@Component({
  selector: 'ba-sidebar',
  templateUrl: './baSidebar.html'
})
export class BaSidebarComponent implements OnInit, AfterViewInit {
  public menuHeight: number;
  public isMenuCollapsed: boolean = false;
  public isMenuShouldCollapsed: boolean = false;

  constructor(private elementRef: ElementRef, private state: GlobalState) {
    this.state.subscribe(GlobalEventType.MenuCollapsingChanged, (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public ngOnInit(): void {
    if (this.shouldMenuCollapse()) {
      this.menuCollapse();
    }
  }

  public ngAfterViewInit(): void {
    setTimeout(() => this.updateSidebarHeight());
  }

  @HostListener('window:resize')
  public onWindowResize(): void {

    let isMenuShouldCollapsed = this.shouldMenuCollapse();

    if (this.isMenuShouldCollapsed !== isMenuShouldCollapsed) {
      this.menuCollapseStateChange(isMenuShouldCollapsed);
    }
    this.isMenuShouldCollapsed = isMenuShouldCollapsed;
    this.updateSidebarHeight();
  }

  public menuExpand(): void {
    this.menuCollapseStateChange(false);
  }

  public menuCollapse(): void {
    this.menuCollapseStateChange(true);
  }

  public menuCollapseStateChange(isCollapsed: boolean): void {
    this.isMenuCollapsed = isCollapsed;
    this.state.notifyDataChanged(GlobalEventType.MenuCollapsingChanged, this.isMenuCollapsed);
  }

  public updateSidebarHeight(): void {
    // TODO: get rid of magic 84 constant
    this.menuHeight = this.elementRef.nativeElement.childNodes[0].clientHeight - 84;
  }

  private shouldMenuCollapse(): boolean {
    return window.innerWidth <= layoutSizes.resWidthCollapseSidebar;
  }
}
