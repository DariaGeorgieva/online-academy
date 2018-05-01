import { DataStorageService } from './shared/data-storage.service';
import { CoursesModule } from './courses/courses.module';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { CourseService } from './courses/course.service';

import {  AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoreModule } from './core/core.module';
import { HttpModule } from '@angular/http';
import { EditCourseComponent } from './courses/edit-course/edit-course.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FilterPipe } from './shared/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SigninComponent,
    SignupComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    HttpModule,
    CoursesModule
  ],
  providers: [CourseService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
