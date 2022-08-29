import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {

  transform(value: any, arg: any ): any {
    const resultCharacters = [];
    for(const character of value){
      if(character.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
resultCharacters.push(character);
      }
    }
    return resultCharacters;
  }

}
