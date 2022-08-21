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
import { HttpClientModule } from '@angular/common/http';

import { HouseDetailComponent } from './pages/houses/house-detail/house-detail.component';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    ScrollingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
