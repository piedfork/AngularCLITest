import { Component, AfterViewInit } from '@angular/core';
import { BaImageLoaderService, BaThemePreloader, BaThemeSpinner } from './shared/services';
import { layoutPaths } from './styles/theme.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'My First Angular App';

  constructor(private imageLoader: BaImageLoaderService, private spinner: BaThemeSpinner) {
    this.loadImages();
  }

  private loadImages(): void {
    // register some loaders
    BaThemePreloader.registerLoader(this.imageLoader.load(layoutPaths.images.root + 'sky-bg.jpg'));
  }

  public ngAfterViewInit(): void {
    // hide spinner once all loaders are completed
    BaThemePreloader.load().then((values) => {
      this.spinner.hide();
    });
  }
}
