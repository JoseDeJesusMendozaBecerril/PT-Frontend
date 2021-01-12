import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideOptionsClientComponent } from './side-options-client.component';

describe('SideOptionsClientComponent', () => {
  let component: SideOptionsClientComponent;
  let fixture: ComponentFixture<SideOptionsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideOptionsClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideOptionsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
