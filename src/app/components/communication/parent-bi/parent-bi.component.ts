import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-bi',
  templateUrl: './parent-bi.component.html',
  styleUrls: ['./parent-bi.component.scss']
})
export class ParentBiComponent implements OnInit {

  initData = "hello";

  constructor() { }

  ngOnInit(): void {
  }

  receaveNotice(notice: string){
    console.log(notice)
    this.initData = notice
  }

}
