import { Component, Output, EventEmitter } from '@angular/core';
import { RedditService } from './reddit.service';
import { map, filter } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { ObserveOnOperator } from 'rxjs/internal/operators/observeOn';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  result: any;
  model: any = {};

  constructor(private redit: RedditService) { }
  visible = true;
  @Output() open = new EventEmitter<any>();

  public onRouterOutletActivate(event: any) {
    console.log(event);
  }

  ngOnInit() {
    /* const seconds = new Observable((oberver) => {
      let i = 0;
      setInterval(() => {
        oberver.next(i++);
      }, 1000);
    });
    seconds.subscribe(value => console.log('observable', value));
    const secondsPromise = new Promise((resolve) => {
      let i = 0;
      setInterval(() => {
        resolve(i++);
      }, 1000);
    });
    secondsPromise.then(values => console.log('promise', values)); */
    const seconds = new Observable((oberver) => {
      let i = 0;
      oberver.next(5);
      oberver.next(10);
    });
    seconds.subscribe(value => console.log('observable', value));
    const secondsPromise = new Promise((resolve) => {
      let i = 0;
      resolve(5);
      resolve(10);
    });
    secondsPromise.then(values => console.log('promise', values));
    const squareOdd = of(1, 2, 3, 4, 5)
      .pipe(
        filter(n => n % 2 !== 0),
        map(n => n * n)
      );

    /*   const secondsObservable = new Observable((observer) => {       
        let i = 0;
        setInterval(() => {
            observer.next(i++);
        }, 1000);
    });
    
    secondsObservable.subscribe(value => console.log(value)); */
    // Subscribe to get values
    squareOdd.subscribe(x => this.result = x);
    console.log(this.result);
  }
}
