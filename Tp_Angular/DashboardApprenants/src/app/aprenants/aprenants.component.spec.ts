import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprenantsComponent } from './aprenants.component';

describe('AprenantsComponent', () => {
  let component: AprenantsComponent;
  let fixture: ComponentFixture<AprenantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprenantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AprenantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
