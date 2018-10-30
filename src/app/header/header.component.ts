import { Component, OnInit } from '@angular/core';
declare let introJs: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const mno = this.intializeIntro()
    mno.start();

  }

  intializeIntro(): any {
    const intro = introJs();
    intro.setOptions({
      steps: [
        {
          element: '#home_link',
          intro: 'Step one description',
          position: 'bottom'
        },
        {
          element: '#news_link',
          intro: 'Step <i>two</i> description',
          position: 'bottom'
        },
        {
          element: '#contact_link',
          intro: 'Step <span style="color: green;">three</span> description',
          position: 'bottom'
        },
        {
          element: '#footer',
          intro: 'Step <span style="color: green;">three</span> description',
          position: 'up'
        }
      ]
    });
    return intro;
  }


}
