import { Course } from './../shared/course.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CourseService {
  course: Course;
  courseChanged = new Subject<Course[]>();

  private courses: Course[] = [
    {
        name: 'Angular',
        category: 'Web',
        teacherName: 'Anton Cholakov',
        teacherEmail: 'anton@cholakov.com',
        // tslint:disable-next-line:max-line-length
        description: 'Angular is one of the most modern, performance-efficient and powerful frontend frameworks you can learn as of today. It allows you to build great web apps which offer awesome user experiences!',
        language: 'English',
        imagePath: 'https://www.trycatchclasses.com/wp-content/uploads/2017/03/AngularJS-2-1.jpg',
        rating: 2,
        visible: true,
        creationDate: new Date(12, 12, 12),
        lastUpdateDate: new Date(11, 11, 11),
    },
    {
        name: 'APS.NET',
        category: 'Web',
        teacherName: 'Peter Yochev',
        teacherEmail: 'peter@yochev.com',
        // tslint:disable-next-line:max-line-length
        description: 'ASP.NET is an open-sourceserver-side web application framework designed for web development to produce dynamic web pages. It was developed by Microsoft to allow programmers to build dynamic web sites, web applications and web services.',
        language: 'Bulgarian',
        imagePath: 'https://cdn.lynda.com/course/513606/513606-636141939389684716-16x9.jpg',
        rating: 2,
        visible: true,
        creationDate: new Date(12, 12, 12),
        lastUpdateDate: new Date(11, 11, 11),
    },
    {
      name: 'Design',
      category: 'Design',
      teacherName: 'Ani Andreeva',
      teacherEmail: 'ani@andreeva.com',
      // tslint:disable-next-line:max-line-length
      description: 'This course is designed to teach you the ins and outs of Photoshop, both CS6 and CC 2017 versions, even if you have little to no experience with it! The goal is to learn how to design fantastic looking websites in Photoshop and create a high monthly income from them.',
      language: 'Bulgarian',
      imagePath: 'http://waxra.com/wp-content/uploads/2017/11/graphic-design-courses.jpg',
      rating: 5,
      visible: true,
      creationDate: new Date(10, 10, 10),
      lastUpdateDate: new Date(10, 10, 10)
    }
  ];

  constructor() {}

  setCourses(courses: Course[]) {
    this.courses = courses;
    this.courseChanged.next(this.courses.slice());
  }

  getCourses() {
    return this.courses.slice();
  }

  getCourse(index: number) {
    return this.courses[index];
  }

  addCourse(course: Course) {
    this.courses.push(course);
    this.courseChanged.next(this.courses.slice());
  }

  editCourse(index: number, newCourse: Course) {
    this.courses[index] = newCourse;
    this.courseChanged.next(this.courses.slice());
  }

  deteleCourse(index: number) {
    this.courses.splice(index, 1);
    this.courseChanged.next(this.courses.slice());
  }
}
