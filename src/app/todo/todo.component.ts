import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent{

  // button Class
  danger:string = "btn btn-danger";

  // todos Array 
  todos:string[] = ['Todo1','Todo2','Todo3','Todo4'];

  // to add item
  addTodo(input: HTMLInputElement) {
   var inputValue = input.value.trim();
   this.todos.push(inputValue)
 }

 // to remove item
  removeTodo(li: HTMLLIElement) {
    li.remove();
  }

}
