import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePokemonComponent } from './favorite-pokemon.component';

describe('FavoritePokemonComponent', () => {
  let component: FavoritePokemonComponent;
  let fixture: ComponentFixture<FavoritePokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoritePokemonComponent]
    });
    fixture = TestBed.createComponent(FavoritePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
