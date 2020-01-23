import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoListService } from '../services/todo-list.service'
import { HttpClient } from '@angular/common/http';
import { Todos } from '../list-todos/list-todos.component';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name='';
  welcomeMessage;
  constructor(private route:ActivatedRoute,private todoList:TodoListService) { }

  ngOnInit() {
    this.name=this.route.snapshot.params['name'];
  }
  getWelcomeMesg(){
    this.welcomeMessage=this.todoList.getMessage();
  }
 

}
