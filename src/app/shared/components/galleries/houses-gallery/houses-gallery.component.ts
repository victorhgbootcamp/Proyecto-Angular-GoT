import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-houses-gallery',
  templateUrl: './houses-gallery.component.html',
  styleUrls: ['./houses-gallery.component.scss']
})
export class HousesGalleryComponent implements OnInit {
  @Input() houses: any = [];
  imgDefault: Iimage ={src:"https://res.cloudinary.com/djbn99sev/image/upload/v1660982268/House-Tyrell-Main-Shield_iqks98.png", alt:"default"}

  constructor() { }

  ngOnInit(): void {
  }
}
export interface Iimage{
  src:string;
  alt:string;
}