import { CharacterService } from './../../shared/services/character.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  
  characters = [];
  constructor(private charactersService:CharacterService) { }

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe((res: any) => {
      console.log(res);
      this.characters = res;
    })
  }

}
