import { CourseService } from './../../../courses/course.service';
import { Course } from './../../../shared/course.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-courses',
  templateUrl: './popular-courses.component.html',
  styleUrls: ['./popular-courses.component.css']
})
export class PopularCoursesComponent implements OnInit {
  courses: Course[];
  categories: any[];
  constructor(private courseService: CourseService) {
    this.categories = [];
   }

  ngOnInit() {
    this.courses = this.courseService.getCourses();
    for (let i = 0; i < this.courses.length; i++) {
      if (this.categories.indexOf(this.courses[i].category) === -1) {
        this.categories.push(this.courses[i].category);
      }
    }
  }
}
