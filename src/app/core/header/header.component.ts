import { Router } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
import { CourseService } from './../../courses/course.service';
import { Course } from './../../shared/course.model';
import {  DataStorageService } from './../../shared/data-storage.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private dataStorageService: DataStorageService,
    private courseService: CourseService,
    private authService: AuthService) { }

  ngOnInit() {
  }

  onSaveData() {
    this.dataStorageService.storeCourses()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.getCourses();
  }

  onLogout() {
    this.authService.logoutUser();
    this.router.navigate(['/']);

  }
}
