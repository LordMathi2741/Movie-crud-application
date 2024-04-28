import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheMoviesPageComponent } from './the-movies-page.component';

describe('TheMoviesPageComponent', () => {
  let component: TheMoviesPageComponent;
  let fixture: ComponentFixture<TheMoviesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheMoviesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
