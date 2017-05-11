import { TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';

import { DashboardModule } from './dashboard.module';
import { GlobalState } from 'app/global.state';

// TestBed.initTestEnvironment(TranslateModule, BrowserDynamicTestingModule, platformBrowserDynamicTesting());

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(
        { 
            imports: [
                DashboardModule,
                NgbModule.forRoot(),
                SharedModule
            ],
            providers: [GlobalState]
        });
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(DashboardComponent);
    expect(fixture.componentInstance instanceof DashboardComponent).toBe(true, 'should create DashboardComponent');
  });
});