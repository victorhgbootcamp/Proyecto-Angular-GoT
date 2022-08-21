import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.scss']
})
export class HouseDetailComponent implements OnInit {

  //houseDetails=[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.route.paramMap.subscribe((params) => {
      //console.log(params.get("idhouse"))
    //})

  }

}
