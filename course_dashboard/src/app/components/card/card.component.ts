import { Component, Input } from '@angular/core';
import { ProgressBarComponent } from "../progress-bar/progress-bar.component";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ProgressBarComponent, ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: string = '';
  @Input() instructor: string = '';
  @Input() progress: number = 0;
}
