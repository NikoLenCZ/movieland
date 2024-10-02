import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsPreviewComponent } from './actors-preview.component';

describe('ActorsPreviewComponent', () => {
  let component: ActorsPreviewComponent;
  let fixture: ComponentFixture<ActorsPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActorsPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
