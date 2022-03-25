import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentProvidesComponent } from './parent-provides.component';

describe('ParentProvidesComponent', () => {
  let component: ParentProvidesComponent;
  let fixture: ComponentFixture<ParentProvidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentProvidesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentProvidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
