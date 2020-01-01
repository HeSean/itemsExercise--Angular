import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailsComponent } from './edit-item/item-details.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {     ReactiveFormsModule,  FormsModule } from '@angular/forms';
import { ListedItemComponent } from './item-list/listed-item/listed-item.component';
import { UpdateAmountComponent } from './item-list/listed-item/update-amount/update-amount.component';







@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    ItemListComponent,
    ItemDetailsComponent,
    HomeComponent,
    ListedItemComponent,
    UpdateAmountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
