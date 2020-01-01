import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ItemDetailsComponent } from './edit-item/item-details.component';
import { ItemListComponent } from './item-list/item-list.component';
import { HomeComponent } from './home/home.component';
import { UpdateAmountComponent } from './item-list/listed-item/update-amount/update-amount.component';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'details', component: ItemDetailsComponent },
  { path: 'list', component: ItemListComponent },
  { path: 'list/:id', component: ItemDetailsComponent },
  { path: 'updateAmount', component: UpdateAmountComponent }


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
