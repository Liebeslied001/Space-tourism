import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMarsComponent } from './content-mars.component';

describe('ContentMarsComponent', () => {
  let component: ContentMarsComponent;
  let fixture: ComponentFixture<ContentMarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentMarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentMarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
