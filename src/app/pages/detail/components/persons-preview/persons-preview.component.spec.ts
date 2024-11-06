import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsPreviewComponent } from './persons-preview.component';

describe('PersonsPreviewComponent', () => {
  let component: PersonsPreviewComponent;
  let fixture: ComponentFixture<PersonsPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonsPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
