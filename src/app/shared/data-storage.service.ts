import { AuthService } from './../auth/auth.service';
import { CourseService } from './../courses/course.service';
import { Course } from './course.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
@Injectable()
export class DataStorageService {
    constructor(private authServuce: AuthService, private http: Http, private courseService: CourseService) {}

    storeCourses() {
     const token = this.authServuce.getToken();

        return this.http.put('https://online-academy-ef192.firebaseio.com/courses.json?auth=' + token, this.courseService.getCourses());
    }
    getCourses() {
     const token = this.authServuce.getToken();

      this.http.get('https://online-academy-ef192.firebaseio.com/courses.json?auth=' + token)
        .map(
          (response: Response) => {
            const courses: Course[] = response.json();
            return courses;
          }
        )
          .subscribe(
            (courses: Course[]) => {
              this.courseService.setCourses(courses);
            }
          );
    }
  }

