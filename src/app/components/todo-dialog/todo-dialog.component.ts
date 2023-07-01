import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { faClose, faCheckToSlot, faBars, faUser, faTag, faCheckSquare, faClock} from '@fortawesome/free-solid-svg-icons'
import { Todo } from 'src/app/models/todo.model';

interface InputData {
  toDo: Todo;
}

interface OutputData {
  rta: boolean;
}

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent {
  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  toDo: Todo;

  constructor(private dialog:DialogRef<OutputData>, @Inject(DIALOG_DATA) data: InputData){
    this.toDo = data.toDo;
  }

  close(): void {
    this.dialog.close({
      rta: true,
    });
  }

}
