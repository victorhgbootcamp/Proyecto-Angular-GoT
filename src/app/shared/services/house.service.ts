import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private http: HttpClient) {}
    getHouses(){ 
  return this.http.get("https://api.got.show/api/show/houses")
  
}
}
