import { Component } from '@stencil/core';


@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css'
})
export class MyApp {

  render() {
    return (
      <div>
        <header >
          <h1 class="heading">Todo List with Stencil</h1>
        </header>

        <main>
          <todo-app />
        </main>
      </div>
    );
  }
}
