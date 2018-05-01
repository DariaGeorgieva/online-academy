import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { CoursesComponent } from './courses/courses.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { EditCourseComponent } from './courses/edit-course/edit-course.component';
import { AuthGuard } from './auth/auth-guard.service';
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'signup', component: SignupComponent},
    { path: 'signin', component: SigninComponent},
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
