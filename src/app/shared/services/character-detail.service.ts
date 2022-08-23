import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterDetailService {

  constructor(private http: HttpClient) { }
  getCharacter(nameCharacter: any){
    return this.http.get('https://api.got.show/api/show/characters/' + nameCharacter)
}

}
