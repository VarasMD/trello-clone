import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Column, Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
      /* Animate items as they're being sorted. */
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      /* Animate an item that has been dropped. */
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
})
export class BoardComponent {
  toDos: Todo[] = [
    {
      id: '1',
      title: 'Task 1',
    },
    {
      id: '2',
      title: 'Task 2',
    },
    {
      id: '3',
      title: 'Task 3',
    },
  ];

  doings: Todo[] = [
    {
      id: '1',
      title: 'Doing 1',
    }
  ];

  dones: Todo[] = [
    {
      id: '1',
      title: 'Done 1',
    }
  ]

  columns: Column[] = [
    {
      title: 'ToDo',
      toDos: this.toDos
    },
    {
      title: 'Doing',
      toDos: this.doings
    },
    {
      title: 'Done',
      toDos: this.dones
    }
  ]

  drop(event: CdkDragDrop<Todo[]>): void {
    if(event.previousContainer.data === event.container.data){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
    }
  }

  addColumn(): void {
    this.columns.push({
      title: "new column",
      toDos: []
    })
  }
}
