import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildReceavesComponent } from './child-receaves.component';

describe('ChildReceavesComponent', () => {
  let component: ChildReceavesComponent;
  let fixture: ComponentFixture<ChildReceavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildReceavesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildReceavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
