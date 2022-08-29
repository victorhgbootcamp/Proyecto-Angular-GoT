import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscadorHouses'
})
export class BuscadorHousesPipe implements PipeTransform {

  transform(value: any, arg: any ): any {
    const resultHouses = [];
    for(const house of value){
      if(house.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
resultHouses.push(house);
      }
    }
    return resultHouses;
  }

}
