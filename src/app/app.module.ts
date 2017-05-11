import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdAlertBasic } from './alert-basic';

import { SharedModule } from './shared/shared.module';
import {StylesModule} from './styles/styles.module';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {ToasterModule} from 'angular2-toaster';
import {PagesModule} from './pages/pages.module';
import {GlobalState} from './global.state';
import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NgbdAlertBasic
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    SharedModule,
    StylesModule.forRoot(),
    NgbModule.forRoot(),
    routing,
    PagesModule,
    ToasterModule,
   ],
  providers: [ GlobalState ],
  bootstrap: [AppComponent]
})
export class AppModule { }
