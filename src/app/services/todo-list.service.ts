import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todos } from '../list-todos/list-todos.component';
//import { HttpClient,HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private http:HttpClient) { }
  getAllTodos(){
    
    return this.http.get<Todos[]>('http://localhost:8080/getAllTodos');
    
  }
  getMessage(){
    return 'messafe drom TodoListService'
  }
  deleteTodoById(id){
    return this.http.delete(`http://localhost:8080/getAllTodos/${id}`);
  }
  retrieveTodoById(id){
    return this.http.get<Todos>(`http://localhost:8080/getAllTodos/${id}`);
  }
  updateTodo(id,todo){
    return this.http.put<Todos>(`http://localhost:8080/updateTodo/${id}`,todo);
  }
  createTodo(todo){
    
    return this.http.post(`http://localhost:8080/createTodo/`,todo);
  }
  createBasicAuthenticationHttpHeader(){
    let username='user';
    let password='pass';
    let basicAuthHeaderString='Basic'+window.btoa(username+':'+password);
    return basicAuthHeaderString;
  }
}
