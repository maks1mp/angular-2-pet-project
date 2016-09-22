import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './registration/component';
import { RegistrationComponent } from './registration/reg.component';
import { UserTasks } from './tasks/component';
import { UserInfo } from './registration/user.info.component';
import { GirlLiker } from './liker/component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }, 
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'tasks/:name',
    component: UserTasks,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'info/:id',
    component: UserInfo,
  },
  {
    path: 'liker',
    component: GirlLiker
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);