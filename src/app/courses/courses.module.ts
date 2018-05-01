import { CoursesRoutingModule } from './courses-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { EditCourseComponent } from './edit-course/edit-course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseComponent } from './courses-list/course/course.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesComponent } from './courses.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        CoursesComponent,
        CoursesListComponent,
        CourseComponent,
        CourseDetailsComponent,
        EditCourseComponent
    ],
    imports: [
    CommonModule,
    ReactiveFormsModule,
    CoursesRoutingModule
    ]
})
export class CoursesModule {}
