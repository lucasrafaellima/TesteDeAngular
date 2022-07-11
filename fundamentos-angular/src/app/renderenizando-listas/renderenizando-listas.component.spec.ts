import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderenizandoListasComponent } from './renderenizando-listas.component';

describe('RenderenizandoListasComponent', () => {
  let component: RenderenizandoListasComponent;
  let fixture: ComponentFixture<RenderenizandoListasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderenizandoListasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderenizandoListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
