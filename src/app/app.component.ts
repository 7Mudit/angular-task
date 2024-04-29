import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ParentComponent],
  template: `<app-parent></app-parent>`,
})
export class AppComponent {
  title = 'my-angular-app';
}
