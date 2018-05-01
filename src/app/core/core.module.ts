import { SharedModule } from './../shared/shared.module';
import { DataStorageService } from './../shared/data-storage.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../app-routing.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from '../courses/courses.component';
import { CoverComponent } from './home/cover/cover.component';
import { PopularCoursesComponent } from './home/popular-courses/popular-courses.component';
import { PricingPlanComponent } from './home/pricing-plan/pricing-plan.component';
import { GetStartedComponent } from './home/get-started/get-started.component';


@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        CoverComponent,
        PopularCoursesComponent,
        PricingPlanComponent,
        GetStartedComponent,
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        SharedModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent,
        FooterComponent
    ],
    providers: [DataStorageService, CoursesComponent]
})


export class CoreModule {}
