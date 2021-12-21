import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { View } from './view';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-button';
import Todo from 'Frontend/generated/dev/hilla/demo/Todo';
import { Binder, field } from '@vaadin/form';
import TodoModel from 'Frontend/generated/dev/hilla/demo/TodoModel';
import { TodoEndpoint } from 'Frontend/generated/endpoints';

@customElement('todo-view')
export class TodoView extends View {
  @state() todos: Todo[] = [];
  binder = new Binder(this, TodoModel);

  // Call backend to fetch all todos when the view is shown
  async connectedCallback() {
    super.connectedCallback();
    this.todos = await TodoEndpoint.findAll();
  }

  async save() {
    const saved = await this.binder.submitTo(TodoEndpoint.save);
    if (saved) {
      this.todos = [...this.todos, saved];
      this.binder.clear();
    }
  }

  render() {
    const { model } = this.binder;

    return html`
      <div class="p-m">
        <h2>Hilla TODO</h2>
        <div class="flex gap-s">
          <vaadin-text-field placeholder="Enter task" ${field(model.task)}></vaadin-text-field>
          <vaadin-button theme="primary" @click=${this.save}>Add</vaadin-button>
        </div>
        <ul>
          ${this.todos.map((todo) => html` <li>${todo.task}</li> `)}
        </ul>
      </div>
    `;
  }
}
