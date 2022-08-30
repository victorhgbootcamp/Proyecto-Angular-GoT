import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss']
})
export class TranslationComponent implements OnInit {
  activeLang = 'en'

  constructor(private translate:TranslateService) {
    
    this.translate.setDefaultLang(this.activeLang);

   }

  ngOnInit(): void {
  }
  useLanguage(lang:any){
    this.activeLang = lang;
    this.translate.use(lang);

  }
}
