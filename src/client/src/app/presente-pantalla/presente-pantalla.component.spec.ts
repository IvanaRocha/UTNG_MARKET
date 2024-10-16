import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentePantallaComponent } from './presente-pantalla.component';

describe('PresentePantallaComponent', () => {
  let component: PresentePantallaComponent;
  let fixture: ComponentFixture<PresentePantallaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PresentePantallaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PresentePantallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
