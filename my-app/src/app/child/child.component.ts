import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() PData: number;
  @Output() childevent = new EventEmitter;
  
  constructor() { }

  ngOnInit() {
  }
  onChange(value) {
    this.childevent.emit(value);
  }

}
