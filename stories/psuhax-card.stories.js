import { html } from 'lit';
import '../src/psuhax-card.js';

export default {
  title: 'PsuhaxCard',
  component: 'psuhax-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <psuhax-card
      style="--psuhax-card-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </psuhax-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
