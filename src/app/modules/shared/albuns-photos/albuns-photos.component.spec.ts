import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbunsPhotosComponent } from './albuns-photos.component';

describe('AlbunsPhotosComponent', () => {
  let component: AlbunsPhotosComponent;
  let fixture: ComponentFixture<AlbunsPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbunsPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbunsPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
