import { NgModule, ModuleWithProviders } from "@angular/core";
import {NgbModule, NgbDateParserFormatter} from "@ng-bootstrap/ng-bootstrap";
import {RouterModule, Router} from "@angular/router";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';
import { BaSlimScroll } from './directives';
import { BaImageLoaderService, BaThemePreloader, BaThemeSpinner, BaMenuService } from './services';
import { BaMsgCenter, BaBackTop, BaContentTop, BaPageTopComponent, BaMenuItem, BaMenuComponent, BaSidebarComponent } from './components';
import { BaProfilePicturePipe} from './pipes';

const NGA_COMPONENTS = [
  // BaAmChart,
  BaMenuItem,
  BaMenuComponent,
  BaSidebarComponent,
  BaBackTop,
  BaContentTop,
  BaPageTopComponent,
  BaMsgCenter
];

const NGA_DIRECTIVES = [
  BaSlimScroll
];


const NGA_PIPES = [
  BaProfilePicturePipe
];

@NgModule({
  declarations: [
    ...NGA_PIPES,
    ...NGA_COMPONENTS,
    ...NGA_DIRECTIVES
  ],
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
      BaImageLoaderService,
      BaThemePreloader,
      BaThemeSpinner,
      BaMenuService
  ],
  exports: [
    NgbModule,
    ...NGA_PIPES,
    ...NGA_COMPONENTS,
    ...NGA_DIRECTIVES
  ]
})

export class SharedModule { }