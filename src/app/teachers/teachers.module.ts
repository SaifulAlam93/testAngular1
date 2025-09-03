import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { TeacherNavComponent } from './teacher-nav/teacher-nav.component';


@NgModule({
  declarations: [
    TeachersComponent,
    TeacherListComponent,
    TeacherDetailsComponent,
    TeacherNavComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule
  ]
})
export class TeachersModule { }
