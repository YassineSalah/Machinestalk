import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserItemComponent } from './users/user-list/user-item/user-item.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserService } from './users/user.service';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    UserListComponent,
    UserItemComponent,
    UserEditComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
