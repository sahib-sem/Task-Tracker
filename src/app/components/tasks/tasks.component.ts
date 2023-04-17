import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';

import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  constructor(private taskService: TaskService){}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }
  Delete(task) {
    this.taskService.deleteTask(task).subscribe(()=> this.tasks= this.tasks.filter(t => t.id !== task.id))
    
  }
  Update(task){
    task.reminder = !task.reminder
    this.taskService.updateTask(task).subscribe()
  }
  addTask(task){
    this.taskService.createTask(task).subscribe((task) => this.tasks.push(task))

  }

}
