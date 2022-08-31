import { HouseDetailService } from './../../../shared/services/house-detail.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.scss']
})
export class HouseDetailComponent implements OnInit {

house: any = {}
imgDefault: Iimage ={src:"https://res.cloudinary.com/djbn99sev/image/upload/v1660982268/House-Tyrell-Main-Shield_iqks98.png", alt:"default"}


  constructor(private route: ActivatedRoute, private houseDetailService: HouseDetailService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const nameHouse = params.get('nameHouse');
      this.houseDetailService.getHouse(nameHouse).subscribe(house =>{
        this.house = house
        console.log(house)
      })
    })
      } 

}
export interface Iimage{
  src:string;
  alt:string;
}
