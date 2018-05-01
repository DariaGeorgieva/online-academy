import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  id: number;
  editMode = false;
  courseForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private courseService: CourseService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.newForm();
        }
      );
  }

  onSubmit() {
    if (this.editMode) {
      this.courseService.editCourse(this.id, this.courseForm.value);
    } else {
      this.courseService.addCourse(this.courseForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private newForm() {
    let courseName = '';
    let courseCategory = '';
    let courseTeacherName = '';
    let courseTeacherEmail = '';
    let courseDescription = '';
    let courseLanguage = '';
    let courseImagePath = '';

    if (this.editMode) {
      const course = this.courseService.getCourse(this.id);
      courseName = course.name;
      courseCategory = course.category;
      courseTeacherName = course.teacherName;
      courseTeacherEmail = course.teacherEmail;
      courseDescription = course.description;
      courseLanguage = course.language;
      courseImagePath = course.imagePath;
        }

    this.courseForm = new FormGroup({
      'name': new FormControl(courseName, Validators.required),
      'category': new FormControl(courseCategory, Validators.required),
      'teacherName': new FormControl(courseTeacherName, Validators.required),
      'teacherEmail': new FormControl(courseTeacherEmail, Validators.required),
      'description': new FormControl(courseDescription, Validators.required),
      'language': new FormControl(courseLanguage, Validators.required),
      'imagePath': new FormControl(courseImagePath, Validators.required),
    });
  }
}

