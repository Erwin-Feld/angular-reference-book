import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-bi',
  templateUrl: './child-bi.component.html',
  styleUrls: ['./child-bi.component.scss']
})
export class ChildBiComponent implements OnInit {

  @Output() valueOut = new EventEmitter<string>();

  valueFromInput = ""

  constructor() { }

  ngOnInit(): void {
  }

  transmitInputValue() {
    this.valueOut.emit(this.valueFromInput)
  }

}
