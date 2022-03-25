import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBiComponent } from './child-bi.component';

describe('ChildBiComponent', () => {
  let component: ChildBiComponent;
  let fixture: ComponentFixture<ChildBiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildBiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildBiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
