'use strict'

const btns = document.querySelectorAll('div>button');
const container = document.getElementById('container');

const btnHandler = ({target:{dataset:{flex}}, target})=>{
  container.style.flexDirection = flex
}
for (const btn of btns) {
  btn.addEventListener('click', btnHandler)
}
