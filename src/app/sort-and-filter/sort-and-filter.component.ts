import { Component, OnInit } from '@angular/core';

export class Todos{
  constructor(
    public id: number,
    public description: string,
    public isDone: boolean,
    public targetDate: Date,
  ){}
}
@Component({
  selector: 'app-sort-and-filter',
  templateUrl: './sort-and-filter.component.html',
  styleUrls: ['./sort-and-filter.component.css']
})
export class SortAndFilterComponent implements OnInit {
  searchTarm:String='';
  listoftodos;
  identifier:String='';
  private page:number=0;
//   listoftodos=[ new Todos(1, 'first', true, new Date()),
//   new Todos(2, 'second', false, new Date()),
//   new Todos(3, 'third', true, new Date()),
//   new Todos(4, 'fourth', true, new Date())
// ];
 
          
  constructor() { }

  ngOnInit() {
   this.listoftodos=[{id:100,description:'first',isDone:true,targetDate:'Sep 6, 2019'},
     { id: 101, description: 'seconf', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 102, description: 'third', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 103, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 104, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 105, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 106, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 107, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 108, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 109, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 110, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 111, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 112, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 113, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 114, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 115, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 116, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 117, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 118, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 119, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 120, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 121, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 122, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 123, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 124, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 125, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 126, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 127, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 128, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 129, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 130, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 131, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 132, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 133, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 134, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 135, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 136, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 137, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 138, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },
     { id: 139, description: 'fourth', isDone: true, targetDate: 'Sep 6, 2019' },]
  }
  setPage(i,event:any){
    event.preventDefault();
    this.page=i;
    this.ngOnInit();
  }

}
