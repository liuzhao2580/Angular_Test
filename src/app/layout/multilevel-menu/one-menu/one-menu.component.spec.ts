import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OneMenuComponent } from './one-menu.component';

describe('OneMenuComponent', () => {
  let component: OneMenuComponent;
  let fixture: ComponentFixture<OneMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OneMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
