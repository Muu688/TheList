import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueueAPIService {

  constructor (private http:HttpClient) {}

  getQueue(){return this.http.get('http://localhost:3000/api/queue/');
}
}
