import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './sheard/components/home/home.component';
import { CardComponent } from './sheard/components/card/card.component';
import { AboutComponent } from './sheard/components/about/about.component';
import { CourseComponent } from './sheard/components/course/course.component';
import { CourseDialogComponent } from './sheard/components/course-dialog/course-dialog.component';
import { CourseFormComponent } from './sheard/components/course-form/course-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './sheard/components/material/material/material.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    AboutComponent,
    CourseComponent,
    CourseDialogComponent,
    CourseFormComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
