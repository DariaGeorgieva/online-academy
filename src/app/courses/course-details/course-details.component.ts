import { ActivatedRoute, Router, Params } from '@angular/router';
import { Course } from './../../shared/course.model';
import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  course: Course;
  id: number;

  constructor(private courseService: CourseService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.course = this.courseService.getCourse(this.id);
        }
      );
  }
  onEditCourse() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteCourse() {
    this.courseService.deteleCourse(this.id);
    this.router.navigate(['/courses']);
  }


}
