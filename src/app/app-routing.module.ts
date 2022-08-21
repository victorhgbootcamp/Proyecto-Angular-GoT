import { HousesComponent } from './pages/houses/houses.component';
import { HouseDetailComponent } from './pages/houses/house-detail/house-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];
//{path: "houses", component: HousesComponent}
//{path: "houses/:idhouse", component: HouseDetailComponent}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
