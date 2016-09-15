import { Component } from '@angular/core';

import { LoginComponent } from './registration/component';

@Component({
  selector: 'my-app',
  template: `<h1>Angular2 task-manager</h1>
             <router-outlet></router-outlet>
            `
})

export class AppComponent { }