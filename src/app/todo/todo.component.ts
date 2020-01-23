import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../services/todo-list.service';
import { Todos } from '../list-todos/list-todos.component';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo:Todos;
  id:number;
  constructor(
    private todoDataService:TodoListService,
    private activatedRoute:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.todo = new Todos(this.id, '', false, new Date());
    if (this.id != -1) {
      this.todoDataService.retrieveTodoById(this.id).subscribe(
        data => { this.todo = data }
      )
    }
  }
  saveButtonClicked() {
    if (this.id === -1) {
      this.todoDataService.createTodo(this.todo).subscribe(
        data=>{
          
        }
      )
      alert('saved successfully');
      
    } else {
      console.log("saveButtonClicked")
      this.todoDataService.updateTodo(this.id, this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      )
    }
  }
}
