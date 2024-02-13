import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { LoginAreaComponent } from './login-area/login-area.component';
import { RoutingModule } from './routing-module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FavoritePokemonComponent } from './favorite-pokemon/favorite-pokemon.component';



@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    LoginAreaComponent,
    FavoritePokemonComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    DetailsComponent,
    LoginAreaComponent
  ]
})
export class PagesModule { }
