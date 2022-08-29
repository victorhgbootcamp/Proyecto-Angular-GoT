import { CharacterService } from './../../shared/services/character.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crono',
  templateUrl: './crono.component.html',
  styleUrls: ['./crono.component.scss']
})
export class CronoComponent implements OnInit {

characters: any = [];
sortCharacters:any=[];
options = {autoHide:false};


  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    
    this.characterService.getCharacters().subscribe((res: any) => {
      const filterCharacter = res.filter((character:any) => character.age != null)
      const refilterCharacter = filterCharacter.filter((character:any) => character.age.age !=null)
      this.characters = refilterCharacter.sort((a:any, b:any)=>{
        return a?.age?.age - b?.age?.age;
        })
      console.log(this.characters)
    });

  }
ordenar(){

  this.characters.reverse()

}
filtrar(){
    for(let character of this.characters){
      if (character.age.age){
        this.sortCharacters.push(character);
        console.log(this.sortCharacters)
      }
      return this.sortCharacters
    }
  }
}
