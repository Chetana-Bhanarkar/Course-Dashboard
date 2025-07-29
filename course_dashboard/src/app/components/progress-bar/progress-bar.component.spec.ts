// src/app/components/progress-bar/progress-bar.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressBarComponent } from './progress-bar.component';
import { By } from '@angular/platform-browser';

describe('ProgressBarComponent', () => {
  let component: ProgressBarComponent;
  let fixture: ComponentFixture<ProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressBarComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render progress width as 0%', () => {
    component.progress = 0;
    fixture.detectChanges();
    const bar = fixture.debugElement.query(By.css('.progress-bar')).nativeElement;
    expect(bar.style.width).toBe('0%');

    const text = fixture.debugElement.query(By.css('.progress-value')).nativeElement;
    expect(text.textContent.trim()).toBe('0% Completed');
  });

  it('should render progress width as 100%', () => {
    component.progress = 100;
    fixture.detectChanges();
    const bar = fixture.debugElement.query(By.css('.progress-bar')).nativeElement;
    expect(bar.style.width).toBe('100%');
  });

  it('should render correct width and text for 75%', () => {
    component.progress = 75;
    fixture.detectChanges();
    const bar = fixture.debugElement.query(By.css('.progress-bar')).nativeElement;
    const text = fixture.debugElement.query(By.css('.progress-value')).nativeElement;
    expect(bar.style.width).toBe('75%');
    expect(text.textContent.trim()).toBe('75% Completed');
  });

  it('should handle values over 100%', () => {
    component.progress = 120;
    fixture.detectChanges();
    const bar = fixture.debugElement.query(By.css('.progress-bar')).nativeElement;
    expect(bar.style.width).toBe('120%');
  });

  it('should handle values below 0%', () => {
    component.progress = -10;
    fixture.detectChanges();
    const bar = fixture.debugElement.query(By.css('.progress-bar')).nativeElement;
    expect(bar.style.width).toBe('-10%');
  });
});
