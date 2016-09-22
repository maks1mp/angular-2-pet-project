import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { routing } from './router';

import { loginService } from './registration/service';
import { TasksService } from './tasks/service';

import { LoginComponent } from './registration/component';
import { AppComponent } from './app.component';
import { UserTasks } from './tasks/component';
import { RegistrationComponent } from './registration/reg.component';
import { UsersList } from './registration/users.list.component';
import { UserInfo } from './registration/user.info.component';
import { GirlLiker } from './liker/component';
import { RowCopmonent } from './liker/row.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
  ],
  providers:  [ loginService, TasksService ],
  declarations: [ AppComponent ,LoginComponent, UserTasks, RegistrationComponent, UsersList, UserInfo, GirlLiker, RowCopmonent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }