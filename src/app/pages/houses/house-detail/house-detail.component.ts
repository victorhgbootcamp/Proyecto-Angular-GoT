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
