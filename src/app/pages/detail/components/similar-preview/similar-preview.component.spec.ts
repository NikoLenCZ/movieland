import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarPreviewComponent } from './similar-preview.component';

describe('SimilarPreviewComponent', () => {
  let component: SimilarPreviewComponent;
  let fixture: ComponentFixture<SimilarPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimilarPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimilarPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
