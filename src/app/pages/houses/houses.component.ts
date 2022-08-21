import { HouseService } from './../../shared/services/house.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {
  
  houses=[];
  constructor(private housesService: HouseService) { }

  ngOnInit(): void {
    this.housesService.getHouses().subscribe((res: any) =>{
      console.log(res);
      this.houses = res;
  })}

}
