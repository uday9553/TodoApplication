import { Pipe, PipeTransform } from '@angular/core';
import { Todos } from '../sort-and-filter/sort-and-filter.component';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {
 // updatedTodos:Todos[];
  transform(filterdTodos: Todos[],searchTerm: String,id:number): Todos[] {
    if(!filterdTodos || !searchTerm){
      return filterdTodos;
    }
   
  // this.updatedTodos=filterdTodos.filter(filterdTodo=>filterdTodo.description.toLowerCase().indexOf(searchTerm.toLowerCase())!=-1);
   //console.log(this.updatedTodos);
   
    return filterdTodos.filter((filterdTodo)=>filterdTodo.description.toLowerCase().indexOf(searchTerm.toLowerCase())!=-1);
   
  }

}
