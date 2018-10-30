import { Component, OnInit } from '@angular/core';
declare let introJs: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about = 'About!';
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
          element: '#hey_there',
          intro: 'Step <span style="color: green;">three</span> description',
          position: 'up'
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
