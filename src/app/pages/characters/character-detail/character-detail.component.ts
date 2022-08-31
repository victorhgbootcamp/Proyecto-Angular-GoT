import { HouseDetailService } from './../../../shared/services/house-detail.service';
import { ActivatedRoute } from '@angular/router';
import { CharacterDetailService } from './../../../shared/services/character-detail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  house:any ={}
  character: any = {}
  options = {autoHide:false};
  imgDefault: Iimage ={src:"https://res.cloudinary.com/djbn99sev/image/upload/v1660982268/House-Tyrell-Main-Shield_iqks98.png", alt:"default"}

  constructor(private route: ActivatedRoute, 
    private characterDetailService: CharacterDetailService,
    private houseDetailService:HouseDetailService) { }

  ngOnInit(): void {

/* this.route.paramMap.subscribe(params => {
  const nameCharacter = params.get('nameCharacter');
  this.characterDetailService.getCharacter(nameCharacter).subscribe(character =>{
    this.character = character
    console.log(character) */
    
this.route.paramMap.subscribe(params => {
  const nameCharacter = params.get('nameCharacter');
  this.characterDetailService.getCharacter(nameCharacter).subscribe(character =>{
    this.character = character;
    this.houseDetailService.getHouse(this.character.house).subscribe(res =>{
      this.house = res;
      console.log(this.house);
  })
})
  }

  )}
}
export interface Iimage{
  src:string;
  alt:string;
}
