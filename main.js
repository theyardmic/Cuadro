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
   

`

setupCounter(document.querySelector('#counter'))
