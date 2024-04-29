import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  template: `<p>Parent Component</p>
    <app-child
      (modelChange)="dataService.handleModelChange($event)"
    ></app-child> `,
})
export class ParentComponent {
  constructor(public dataService: DataServiceService) {
    this.dataService.selectionChanges$.subscribe((selectionModel) => {
      console.log('New selection : ', selectionModel);
    });
  }
}
