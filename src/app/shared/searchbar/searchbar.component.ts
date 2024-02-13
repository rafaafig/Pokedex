import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  @Output() searchValueChange: EventEmitter<string> = new EventEmitter<string>();

  public searchValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  public search(value: string): void {
    this.searchValueChange.emit(value);
  }


}
