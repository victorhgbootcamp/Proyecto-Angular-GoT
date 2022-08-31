import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { HousesComponent } from './pages/houses/houses.component';
import { HomeComponent } from './pages/home/home.component';
import { CronoComponent } from './pages/crono/crono.component';
import { CharactersGalleryComponent } from './shared/components/galleries/characters-gallery/characters-gallery.component';
import { HousesGalleryComponent } from './shared/components/galleries/houses-gallery/houses-gallery.component';
import { HttpClient, HttpClientModule, } from '@angular/common/http';

import { HouseDetailComponent } from './pages/houses/house-detail/house-detail.component';
import { CharacterDetailComponent } from './pages/characters/character-detail/character-detail.component';
import { SimplebarAngularModule } from 'simplebar-angular';
import { BuscadorPipe } from './pipes/buscador.pipe';
import { FormsModule } from '@angular/forms';
import { BuscadorHousesPipe } from './pipes/buscador-houses.pipe';
import {  TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslationComponent } from './shared/components/translation/translation.component';




@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    HousesComponent,
    HomeComponent,
    CronoComponent,
    CharactersGalleryComponent,
    HousesGalleryComponent,
    HouseDetailComponent,
    CharacterDetailComponent,
    BuscadorPipe,
    BuscadorHousesPipe,
    TranslationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SimplebarAngularModule,
    FormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,
        useFactory: (http:HttpClient) => {
          return new TranslateHttpLoader(http)
        },
        deps: [HttpClient]
      }
    
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/* // required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
} */