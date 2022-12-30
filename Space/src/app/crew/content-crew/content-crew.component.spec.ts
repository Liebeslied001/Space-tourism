import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCrewComponent } from './content-crew.component';

describe('ContentCrewComponent', () => {
  let component: ContentCrewComponent;
  let fixture: ComponentFixture<ContentCrewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentCrewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentCrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
