import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { View } from './view';
import '@vaadin/button';
import '@vaadin/grid';
import Person from 'Frontend/generated/dev/hilla/demo/entity/Person';
import { PersonEndpoint } from 'Frontend/generated/endpoints';

@customElement('person-view')
export class PersonView extends View {
  @state() people: Person[] = [];

  async getPeople() {
    this.people = await PersonEndpoint.findAll();
  }

  render() {
    return html`
      <div class="p-m">
        <vaadin-button @click=${this.getPeople}>Fetch data</vaadin-button>

        <vaadin-grid .items=${this.people}>
          <vaadin-grid-column path="firstName"></vaadin-grid-column>
          <vaadin-grid-column path="lastName"></vaadin-grid-column>
          <vaadin-grid-column path="email"></vaadin-grid-column>
          <vaadin-grid-column path="phone"></vaadin-grid-column>
        </vaadin-grid>

        <p>
          <a href="/">Todo view</a>
        </p>
      </div>
    `;
  }
}
