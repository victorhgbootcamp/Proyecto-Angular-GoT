import { HouseDetailComponent } from './pages/houses/house-detail/house-detail.component';

import { CronoComponent } from './pages/crono/crono.component';
import { HomeComponent } from './pages/home/home.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { HousesComponent } from './pages/houses/houses.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './pages/characters/character-detail/character-detail.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "personajes", component: CharactersComponent},
  {path: "casas", component: HousesComponent},
  {path: "cronologia", component: CronoComponent},
  {path: "casas/:nameHouse", component: HouseDetailComponent},
  {path: "personajes/:nameCharacter", component: CharacterDetailComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
