import { Component, inject, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatButton} from "@angular/material/button";
import { Course } from '../courses/course.model';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatButton,
    MatError,
    MatCheckbox
  ],
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss'
})
export class CourseFormComponent {
  #formBuilder: FormBuilder = inject(FormBuilder);
  courseForm: FormGroup = this.#formBuilder.group({
    description: ['', [Validators.required]],
    longDescription: ['', [Validators.required]],
    lessonsCount: [''],
    category: [''],
    seqNo: [''],
    promo: [false]
  });
  submit = output<Course>();

  onSubmit(): void {
      this.submit.emit(this.courseForm.value);
  }
}
