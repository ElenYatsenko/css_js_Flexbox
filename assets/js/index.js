'use strict'

const btns = document.querySelectorAll('div>button');
const container = document.getElementById('container');

const btnHandler = ({target:{dataset:{flexDrctn}}, target})=>{
  console.log(target.style);
  console.log(flexDrctn);
  container.style.flexDirection = flexDrctn;
}
for (const btn of btns) {
  btn.addEventListener('click', btnHandler)
}
