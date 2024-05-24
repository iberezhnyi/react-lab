import React, { Component } from 'react';
// ********************************************
import Counter from './Counter';
import { Dropdown } from './Dropdown';
import { ColorPicker } from './ColorPicker/ColorPicker';
import { TodoList } from './TodoList';
import initialTtodos from './TodoList/todos.json';
// ********************************************
import PaintingList from './Paintings/PaintingList';
import Section from './Paintings/Section';
import paintings from './Paintings/paintings.json';
// ********************************************

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export class App extends Component {
  state = {
    todos: initialTtodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const completedTodosCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    return (
      <>
        <h1>Состояние компонента</h1>
        <Counter />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />

        <div>
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>Кол-во выполненных: {completedTodosCount}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />

        <div>
          <Section title="The top of the week!">
            <PaintingList items={paintings} />
          </Section>

          <Section title="The best!">
            <PaintingList items={paintings} />
          </Section>
        </div>
      </>
    );
  }
}
