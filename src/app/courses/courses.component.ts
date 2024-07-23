import { Component, inject } from '@angular/core';
import { CoursesHttpService } from './courses-http.service';
import { CourseFormComponent } from '../course-form/course-form.component';

import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from "@angular/material/table";
import { Course } from './course.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CourseFormComponent,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatTable,
    AsyncPipe
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  #coursesService: CoursesHttpService = inject(CoursesHttpService);
  courses$ = this.#coursesService.getCourses();
  readonly displayedColumns: string [] = ['id', 'description', 'longDescription', 'lessonsCount', 'category', 'promo']

  onSaveCourse(course: Course): void {
    this.#coursesService.addCourse(course).subscribe(() => {
      this.courses$ = this.#coursesService.getCourses();
    })
  }
}
