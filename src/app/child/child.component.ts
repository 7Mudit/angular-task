import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  template: `<p>Child Component</p>`,
})
export class ChildComponent {
  model: SelectionModel<any> = new SelectionModel<any>(true);

  @Output() modelChange = new EventEmitter<SelectionModel<any>>();

  constructor() {
    setInterval(() => {
      this.model.select({ id: Math.random() });
      this.modelChange.emit(this.model);
    }, 5000);
  }
}
