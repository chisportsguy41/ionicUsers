import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewPage } from './user-view.page';

describe('UserViewPage', () => {
  let component: UserViewPage;
  let fixture: ComponentFixture<UserViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
