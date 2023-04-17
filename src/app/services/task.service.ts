import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
import { Observable} from 'rxjs';
import {HttpClient , HttpHeaders} from '@angular/common/http';

const options = {
  headers: new HttpHeaders({
  'content-type': 'application/json'
})}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
   private apiUrl:string = 'http://localhost:5000/tasks'

  constructor(private http: HttpClient) { }
  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);

  }
  deleteTask(task:Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url);
  }
  updateTask(task:Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url , task, options)

  }
  createTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, options)
  }
}
