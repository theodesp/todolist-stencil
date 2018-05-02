import {Component , Prop } from '@stencil/core';
import { TodoItem } from "../../models/todoItem";


@Component({
  tag: 'todo-list'
})
export class TodoList {
  @Prop() todoItems: TodoItem[];

  render() {
    return (
      <ul class="todo-list">
        {
          this.todoItems.map((item: TodoItem) => (
            <li>{item.text}</li>
          ))
        }
      </ul>
    );
  }
}
