import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { HousesComponent } from './pages/houses/houses.component';
import { HomeComponent } from './pages/home/home.component';
import { CronoComponent } from './pages/crono/crono.component';
import { CharactersGalleryComponent } from './shared/components/galleries/characters-gallery/characters-gallery.component';
import { HousesGalleryComponent } from './shared/components/galleries/houses-gallery/houses-gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
 
@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    HousesComponent,
    HomeComponent,
    CronoComponent,
    CharactersGalleryComponent,
    HousesGalleryComponent
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
