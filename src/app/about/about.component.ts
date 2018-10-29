import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about = 'This is About!';
  @Output() aboutSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectAbout() {
    this.aboutSelected.emit(true);
  }

}
