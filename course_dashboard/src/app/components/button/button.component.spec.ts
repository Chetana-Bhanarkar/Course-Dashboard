import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the label text', () => {
    component.label = 'Continue';
    fixture.detectChanges();

    const buttonEl = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(buttonEl.textContent.trim()).toBe('Continue');
  });

  it('should be disabled when disabled input is true', () => {
    component.label = 'Submit';
    component.disabled = true;
    fixture.detectChanges();

    const buttonEl = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(buttonEl.disabled).toBeTrue();
  });

  it('should be enabled when disabled input is false', () => {
    component.label = 'Submit';
    component.disabled = false;
    fixture.detectChanges();

    const buttonEl = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(buttonEl.disabled).toBeFalse();
  });
});
