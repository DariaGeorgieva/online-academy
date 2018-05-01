import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';
import { AuthGuard } from './../auth/auth-guard.service';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { CoursesComponent } from './courses.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



const coursesRoutes: Routes = [
     { path: 'courses', component: CoursesComponent, children: [
        { path: 'new',  component: EditCourseComponent, canActivate: [AuthGuard]},
        { path: ':id', component: CourseDetailsComponent},
        { path: ':id/edit', component: EditCourseComponent, canActivate: [AuthGuard]}
     ]},
     { path: 'page-not-found', component: PageNotFoundComponent},
     { path: '**', redirectTo: 'page-not-found' }
];



@NgModule({
    imports: [
        RouterModule.forChild(coursesRoutes)
    ],
    exports: [RouterModule]
})

export class CoursesRoutingModule {}
