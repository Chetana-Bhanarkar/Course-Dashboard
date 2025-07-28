import { Component } from '@angular/core';
import { courses } from '../../data/courses';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-my-course',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './my-course.component.html',
  styleUrl: './my-course.component.css'
})
export class MyCourseComponent {
  courses: any[] = [];
  ngOnInit(): void {
    this.courses = courses;
  }
}
