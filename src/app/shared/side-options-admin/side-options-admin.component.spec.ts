import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideOptionsAdminComponent } from './side-options-admin.component';

describe('SideOptionsAdminComponent', () => {
  let component: SideOptionsAdminComponent;
  let fixture: ComponentFixture<SideOptionsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideOptionsAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideOptionsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
