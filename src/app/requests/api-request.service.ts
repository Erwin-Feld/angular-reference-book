import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface RequestObject {
  userId: number;
	id: number;
	title: string;
	completed: boolean;

}

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(private http: HttpClient) { }
  
  /* simple getRequest */
  getTodo(): Observable<RequestObject>{
    return this.http.get<RequestObject>('https://jsonplaceholder.typicode.com/todos/1')
  
  /* getReq with APi Key */  

}


  /* make request to mock API -- https://jsonplaceholder.typicode.com/ */
    // getWeather(city: string): Observable<any> {
  //   return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=7eb89794063ff124eee3ab9fc63d3056`);
  // }

}
