import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { FormsModule } from '@angular/forms';
import { StudentNavComponent } from './student-nav/student-nav.component';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentListComponent,
    StudentDetailsComponent,
    StudentNavComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule
  ]
})
export class StudentsModule { }
