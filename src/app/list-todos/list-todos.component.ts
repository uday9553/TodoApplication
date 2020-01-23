import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../services/todo-list.service';
import { Router } from '@angular/router';
export class Todos{
  constructor(
    public id: number,
    public desc: string,
    public isDone: boolean,
    public targetDate: Date,
  ){}
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  welcomeMessage;
  todos:Todos[]

  /*  new Todos(1,'first',false,new Date()),
    new Todos(2,'second',false,new Date()),
    new Todos(3,'third',false,new Date()),
    new Todos(4,'fourth',true,new Date())*/
    // {id:1,desc:'first'},
    // {id:2,desc:'second'},
    // {id:3,desc:'third'},
    // {id:4,desc:'four'}
  //];
  constructor(private todoList:TodoListService,private router:Router) { }

  ngOnInit() {
    this.refreshTodos();
  }
  refreshTodos(){
    this.todoList.getAllTodos().subscribe(
      response=>{this.todos=response}
    )
  }

  deleteButtonClicked(id){
    this.todoList.deleteTodoById(id).subscribe(
      response=>{console.log('deleted successfully');
      this.refreshTodos();
      this.welcomeMessage=`deleted id ${id} successfully`;
    });
   
  }
  updateButtonClicked(id){
    console.log(`updated ${id}`)
    this.router.navigate(['todos',id]);
  }
  addButtonClicked(){
    this.router.navigate(['todos',-1]);
  }
}



