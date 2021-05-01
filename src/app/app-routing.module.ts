import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './modules/users/users.component';
import {UserDetailsComponent} from './modules/user-details/user-details.component';
import { TodoComponent } from './todo/todo.component';
import { CvComponent } from './cv/cv/cv.component';
import { RouterComponent } from './router/router.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {path:'todo', component: TodoComponent},
  {path: 'cv', component: CvComponent},
  {path:'router', component: RouterComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users-detais', component: UserDetailsComponent},
  {path: '**', redirectTo: '/users'}

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  declarations: []
})


export class AppRoutingModule {
}
