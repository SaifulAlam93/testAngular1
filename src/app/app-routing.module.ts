import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopSingleComponent } from './components/shop-single/shop-single.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ReviewComponent } from './components/review/review.component';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { UserAddEditComponent } from './components/user-add-edit/user-add-edit.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HomeStandalonComponent } from './home-standalon/home-standalon.component';
import { ExampleComponent } from './directives/example/example.component';
import { ProductComponent } from './directives/product/product.component';

const routes: Routes = [
  { path: '', redirectTo: '/d', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'd', component: ExampleComponent },
  { path: 'products', component: ProductComponent },
  { path: 'homeStandAlon', component: HomeStandalonComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'single/:id', component: ShopSingleComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SingupComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/add', component: UserAddEditComponent },
  { path: 'users/edit/:id', component: UserAddEditComponent },
  { path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) },
  { path: 'teachers', loadChildren: () => import('./teachers/teachers.module').then(m => m.TeachersModule) },
  { path: '**', component: ErrorPageComponent },
];

// ,
//     children: [
//       { path: 'list', component: ProductListComponent },
//       { path: 'details/:id', component: ProductDetailsComponent }
//     ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
