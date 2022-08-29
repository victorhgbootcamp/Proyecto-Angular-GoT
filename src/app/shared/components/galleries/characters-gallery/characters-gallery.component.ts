import { Component, Input, OnInit } from '@angular/core';
import { SimplebarAngularModule } from 'simplebar-angular';

@Component({
  selector: 'app-characters-gallery',
  templateUrl: './characters-gallery.component.html',
  styleUrls: ['./characters-gallery.component.scss']
})
export class CharactersGalleryComponent implements OnInit {
  
  @Input() characters: any = [];
  numbers = Array(100).fill(0);
  options = {autoHide:false};
  imgDefault: Iimage ={src:"https://img.freepik.com/fotos-premium/mandarinas-aisladas-mitad-mandarina-pelada-mandarina-entera-o-fruta-naranja-hojas-verdes-aisladas-sobre-fondo-blanco_95544-241.jpg", alt:"default",}
  
  
  constructor() { }
  filterCharacter = '';
  ngOnInit(): void {
  }

}
export interface Iimage{
  src:string;
  alt:string;
}