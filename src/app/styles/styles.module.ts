import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({
})
export class StylesModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: StylesModule
    };
  }
}
