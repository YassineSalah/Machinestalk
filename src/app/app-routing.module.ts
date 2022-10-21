import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {path: 'users', component: UsersComponent, 
  children: [
    {path: 'new', component: UserEditComponent},
    {path: ':id', component: UserDetailComponent},
    {path: ':id/edit', component: UserEditComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
