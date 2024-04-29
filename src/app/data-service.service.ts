import { Injectable } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private selectionChangesSubject = new Subject<SelectionModel<any>>();
  selectionChanges$: Observable<SelectionModel<any>> =
    this.selectionChangesSubject;

  handleModelChange(model: SelectionModel<any>) {
    this.selectionChangesSubject.next(model);
  }
}
