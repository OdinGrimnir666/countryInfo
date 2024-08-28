import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetWebComponent } from './widget-web.component';

describe('WidgetWebComponent', () => {
  let component: WidgetWebComponent;
  let fixture: ComponentFixture<WidgetWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetWebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WidgetWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
