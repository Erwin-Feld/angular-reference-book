import { Component, OnInit } from '@angular/core';
import { ApiRequestService, RequestObject } from 'src/app/requests/api-request.service';

@Component({
  selector: 'app-display-requests',
  templateUrl: './display-requests.component.html',
  styleUrls: ['./display-requests.component.scss']
})
export class DisplayRequestsComponent implements OnInit {

  constructor(private apiRequest: ApiRequestService) { }


  requestData$ = this.apiRequest.getTodo()

  apiDataSubcription$ = this.apiRequest.getTodo().subscribe(data => data)

  ngOnInit(): void {
    this.getTodo()
  }


    getTodo(){
    this.apiRequest.getTodo().subscribe(data=> {
      console.log(data.userId)
    })
    
  }

}
