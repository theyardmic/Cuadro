import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
  <h1>Kikapu</h1>
  <div class="card">
    <button id="counter" type="button"></button>
  </div>
  <p class="read-the-docs">
   We'll be live soon. Thank you for your Patience<br />
    
  </p>
    <a href="https://b-friday.netlify.app" target="_blank">
      <img src="./merchy.png" class="logo" alt="Merchy logo" />
    </a>
    <a href="https://strucker.netlify.app" target="_blank">
      <img src="./strucker.png" class="logo vanilla" alt="Strucker logo" />
    </a>
<div class="footer">
    &copy; 2023 Cuadro </br>
   Strucker Inc. </br>
   All rights reserved.
    </div>
   
  </div>
`

setupCounter(document.querySelector('#counter'))
