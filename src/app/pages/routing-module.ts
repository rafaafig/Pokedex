import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { LoginAreaComponent } from './login-area/login-area.component';
import { FavoritePokemonComponent } from './favorite-pokemon/favorite-pokemon.component';
import { AuthGuardService } from '../service/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'login',
    component: LoginAreaComponent
  },
  {
    path: 'fav',
    component: FavoritePokemonComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
