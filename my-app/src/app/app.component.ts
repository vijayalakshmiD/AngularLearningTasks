import { Component,Output,EventEmitter } from '@angular/core';
import { RedditService } from './reddit.service';
import { map,filter } from "rxjs/operators";
import { Observable, of } from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  result : any;
  model: any = {};

  constructor( private redit : RedditService) { }
  visible = true;
  @Output() open = new EventEmitter<any>();

  public onRouterOutletActivate(event : any) {
    console.log(event);
}

  ngOnInit() {
    const squareOdd = of(1, 2, 3, 4, 5)
  .pipe(
    filter(n => n % 2 !== 0),
    map(n => n * n)
  );

// Subscribe to get values
    squareOdd.subscribe(x => this.result = x);
    console.log(this.result);
  }
}
