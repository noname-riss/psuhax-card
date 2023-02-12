import { LitElement, html, css } from 'lit';

// const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class PsuhaxCard extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    /* :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--psuhax-card-background-color);
    }



    main {
      flex-grow: 1;
    }

    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }*/
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`

      <div class="card">
<img class="image" src="https://www.psu.edu/PSU-mark-navy.jpg" alt="PSU logo"/>
<h1 id="h1">Penn State Hax</h1>
<p id="par"> Here is the class website for IST 256 and Haxpsu:
<a href="https://hax.psu.edu/">

</a> </p>
  <button class="button">
    Details
</button>
</div>



<div class="buttonHolder">
    <button class="add"> Add Frame </button>

  <button class="chageBG">Change Background</button>

   <button class="chageti">Change Title</button>

  <button class="delete">Delete last card</button>
</div>


<style>
  .card{
    border: 10px solid rgb(8, 8, 8);
    background-color: blue;
    display: flex;
    margin: 82px auto 32px;
    padding: 0 16px;
    max-width: 400px;
    flex-direction: column;
    align-items: center;
  }
.image{
  visibility: visible;
  width: 400px;
}

  .buttonHolder{
    text-transform: uppercase;
    padding: 8px;
    flex-direction: column;
    display: flex;
    align-items: center;
  }

  .card:hover{
  background-color:grey;
}

.newBG{
  background-color:white;
}
</style>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}

customElements.define('psuhax-card', PsuhaxCard);
