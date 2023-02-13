import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MuuBotAPIService {

  constructor(private http: HttpClient) { }

  getQueue() {
    return this.http.get('https://king-prawn-app-qbkz5.ondigitalocean.app/api/queue/');
  }
  getUserData(username) {
    return this.http.get(`https://king-prawn-app-qbkz5.ondigitalocean.app/api/user/${username}`);
  }
}
