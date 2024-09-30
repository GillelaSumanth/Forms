import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { FormControlerNameComponent } from './form-controler-name/form-controler-name.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet,FormControlerNameComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form';
}
