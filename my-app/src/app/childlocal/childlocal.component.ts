import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childlocal',
  templateUrl: './childlocal.component.html',
  styleUrls: ['./childlocal.component.css']
})
export class ChildlocalComponent implements OnInit {

  constructor() { }
  
  count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
  ngOnInit() {
  }

}
