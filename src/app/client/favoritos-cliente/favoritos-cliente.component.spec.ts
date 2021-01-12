import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritosClienteComponent } from './favoritos-cliente.component';

describe('FavoritosClienteComponent', () => {
  let component: FavoritosClienteComponent;
  let fixture: ComponentFixture<FavoritosClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritosClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
