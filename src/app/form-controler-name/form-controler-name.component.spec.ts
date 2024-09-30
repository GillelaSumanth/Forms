import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlerNameComponent } from './form-controler-name.component';

describe('FormControlerNameComponent', () => {
  let component: FormControlerNameComponent;
  let fixture: ComponentFixture<FormControlerNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormControlerNameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormControlerNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
