import { Component, Input , EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task:Task;
  @Output() deleteTask:EventEmitter<Task> = new EventEmitter();
  @Output() togleBtn:EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  apiUrl:string = 'http://localhost:5000/tasks'
  constructor() {}

  delete(task:Task):void {
    this.deleteTask.emit(task);

  }
  Toggle(task){
    this.togleBtn.emit(task)

  }

}
