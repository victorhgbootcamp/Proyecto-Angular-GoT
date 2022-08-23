import { ActivatedRoute } from '@angular/router';
import { CharacterDetailService } from './../../../shared/services/character-detail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  character: any = {}
  constructor(private route: ActivatedRoute, private characterDetailService: CharacterDetailService) { }

  ngOnInit(): void {

this.route.paramMap.subscribe(params => {
  const nameCharacter = params.get('nameCharacter');
  this.characterDetailService.getCharacter(nameCharacter).subscribe(character =>{
    this.character = character
    console.log(character)
  })
})
  }

  }


