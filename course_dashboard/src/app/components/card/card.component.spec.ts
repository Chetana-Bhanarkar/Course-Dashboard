import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { By } from '@angular/platform-browser';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { ButtonComponent } from '../button/button.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent, ProgressBarComponent, ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render title and instructor correctly', () => {
    component.title = 'Angular Basics';
    component.instructor = 'John Doe';
    fixture.detectChanges();

    const titleEl = fixture.debugElement.query(By.css('.card-title')).nativeElement;
    const instructorEl = fixture.debugElement.query(By.css('.card-subtitle')).nativeElement;

    expect(titleEl.textContent).toBe('Angular Basics');
    expect(instructorEl.textContent).toBe('John Doe');
  });

  it('should pass progress to ProgressBarComponent', () => {
    component.progress = 65;
    fixture.detectChanges();

    const progressBar = fixture.debugElement.query(By.directive(ProgressBarComponent)).componentInstance;
    expect(progressBar.progress).toBe(65);
  });

  it('should render Continue button', () => {
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.directive(ButtonComponent));
    expect(button).toBeTruthy();
  });
});
