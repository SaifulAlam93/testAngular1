import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersComponent } from './teachers.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';

const routes: Routes = [

  { path: '', redirectTo: '/teachers/list', pathMatch: 'full' },
  { path: 'list', component: TeacherListComponent },
  { path: 'std', component: TeacherDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
