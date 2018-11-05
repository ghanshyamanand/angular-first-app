import { Component, OnInit } from '@angular/core';
declare let Shepherd: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const tour = new Shepherd.Tour({
      defaults: {
        classes: 'shepherd-theme-arrows',
        scrollTo: true
      }
    });

    tour.addStep('example-step1', {
      text: 'This is home, click here to go to home page.',
      attachTo: '#id1 bottom',
      classes: 'example-step-extra-class',
      buttons: [
        {
          text: 'Next',
          action: tour.next
        },
        {
          text: 'Exit',
          classes: 'shepherd-button-secondary',
          action: tour.complete
        }
      ]
    });

    tour.addStep('example-step2', {
      text: 'This is news link, click here to go to news page.',
      attachTo: '#id2 bottom',
      classes: 'example-step-extra-class',
      buttons: [
        {
          text: 'Back',
          action: tour.back,
          classes: 'shepherd-button-example-primary'
        },
        {
          text: 'Next',
          action: tour.next
        },
        {
          text: 'Exit',
          classes: 'shepherd-button-secondary',
          action: tour.complete
        }
      ]
    });

    tour.addStep('example-step3', {
      text: 'This is footer.',
      attachTo: '#footer_id bottom',
      classes: 'example-step-extra-class',
      buttons: [
        {
          text: 'Back',
          action: tour.back,
          classes: 'shepherd-button-example-primary'
        },
        {
          text: 'Next',
          action: tour.next
        },
        {
          text: 'Exit',
          classes: 'shepherd-button-secondary',
          action: tour.complete
        }
      ]
    });

    tour.start();
    // tour.show("footer_id")

  }

}




