import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://b-friday.netlify.app" target="_blank">
      <img src="/merchy.png" class="logo" alt="Merchy logo" />
    </a>
    <a href="https://strucker.netlify.app" target="_blank">
      <img src="strucker.png" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Cuadro Digital Art Market Place</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
    We're working on the system. We'll be live soon. <br />
      Meanwhile, you can check my other projects linked above.
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
