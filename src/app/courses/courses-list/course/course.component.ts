import { Course } from './../../../shared/course.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() course: Course;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
