import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsMoviesComponent } from './cards-movies.component';

describe('CardsMoviesComponent', () => {
  let component: CardsMoviesComponent;
  let fixture: ComponentFixture<CardsMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsMoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
