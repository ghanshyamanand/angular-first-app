import {Component } from '@angular/core';
import { HintService } from 'angular-custom-tour';

import {window} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HintService]
})
export class AppComponent {
  title = 'simple-angular-app';
  selectedTab = 'Home';

  constructor(public hintService: HintService) { }

  startTour() {
    this.hintService.initialize();
  }

}
