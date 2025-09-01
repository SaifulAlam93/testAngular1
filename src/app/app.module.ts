import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopSingleComponent } from './components/shop-single/shop-single.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ReviewComponent } from './components/review/review.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserAddEditComponent } from './components/user-add-edit/user-add-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './dataSharing/parent/parent.component';
import { ChildComponent } from './dataSharing/child/child.component';
import { SenderComponent } from './dataSharing/sender/sender.component';
import { ReceiverComponent } from './dataSharing/receiver/receiver.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ShopComponent,
    ShopSingleComponent,
    ErrorPageComponent,
    ReviewComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SingupComponent,
    UserListComponent,
    UserAddEditComponent,
    ParentComponent,
    ChildComponent,
    SenderComponent,
    ReceiverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule  
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
