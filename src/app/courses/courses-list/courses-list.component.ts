import { CourseService } from './../course.service';
import { Course } from './../../shared/course.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit, OnDestroy {
  courses: Course[];
  subscription: Subscription;
  input: string;

  constructor(private courseServcie: CourseService, private router: Router, private route: ActivatedRoute) {
 this.input = '';
  }

  ngOnInit() {
    this.subscription = this.courseServcie.courseChanged
      .subscribe(
        (courses: Course[]) => {
          this.courses = courses;
        }
      );
    this.courses = this.courseServcie.getCourses();
  }
  onAddCourse() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
