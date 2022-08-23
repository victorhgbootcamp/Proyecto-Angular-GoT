import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HouseDetailService {

  constructor(private http: HttpClient) { }
  getHouse(nameHouse: any){
    return this.http.get('https://api.got.show/api/show/houses/' + nameHouse)
  }
}
