import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentBiComponent } from './parent-bi.component';

describe('ParentBiComponent', () => {
  let component: ParentBiComponent;
  let fixture: ComponentFixture<ParentBiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentBiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentBiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
