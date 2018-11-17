import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildlocalComponent } from '../childlocal/childlocal.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  @ViewChild(ChildlocalComponent) child: ChildlocalComponent;
  
  increment() {
    this.child.increment();
  }
  decrement() {
    this.child.decrement();
  }
  ngOnInit() {
  }

}
