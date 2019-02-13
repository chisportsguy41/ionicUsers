import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'logout', loadChildren: './logout/logout.module#LogoutPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'users', loadChildren: './users/users.module#UsersPageModule' },
  { path: 'user-view/:id', loadChildren: './user-view/user-view.module#UserViewPageModule' },
  { path: 'user-edit/:id', loadChildren: './user-edit/user-edit.module#UserEditPageModule' },
  { path: 'user-create', loadChildren: './user-create/user-create.module#UserCreatePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
