import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  api: any = 'https://shreyassavanoor-portfolio.firebaseio.com/';
  constructor(private http: HttpClient) { }

  getData(name) {
    return this.http.get(this.api + name + '.json');
  }

  updateData(name, data) {
    return this.http.put(this.api + name + '.json', data);
  }
}
