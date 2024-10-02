import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewPreviewComponent } from './crew-preview.component';

describe('CrewPreviewComponent', () => {
  let component: CrewPreviewComponent;
  let fixture: ComponentFixture<CrewPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrewPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrewPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
