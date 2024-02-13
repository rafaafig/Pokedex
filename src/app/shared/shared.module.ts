import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { TypeColorPipe } from './pipes/type-color.pipe';
import { NameColorPipe } from './pipes/name-color.pipe';
import { ItaliIdPipe } from './pipes/itali-id.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ListComponent,
    SearchbarComponent,
    TypeColorPipe,
    NameColorPipe,
    ItaliIdPipe,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    ListComponent,
    SearchbarComponent,
    TypeColorPipe,
    NameColorPipe,
    ItaliIdPipe,
    DashboardComponent
  ]
})
export class SharedModule { }
