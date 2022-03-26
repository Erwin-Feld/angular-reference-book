import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-receaves',
  templateUrl: './child-receaves.component.html',
  styleUrls: ['./child-receaves.component.scss']
})
export class ChildReceavesComponent implements OnInit {

  @Input()parentPropValue = ""

  constructor() { }

  ngOnInit(): void {
  }

}
