import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemDetailsComponent } from './edit-item/item-details.component';
import { ItemListComponent } from './item-list/item-list.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'details', component: ItemDetailsComponent },
  { path: 'list', component: ItemListComponent },
  { path: 'list/:id', component: ItemDetailsComponent },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
