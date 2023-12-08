import "../src/style.scss"
import "./darkMode.js"
import { hiddenElem, showElem } from "./utils.js"

const input = document.querySelector('.input');
const submitBtn = document.querySelector('.submit-btn');
const clearBtn = document.querySelector('.clear-btn');
const doodle = document.querySelector('.doodle-btn');
const main = document.querySelector('.main')

hiddenElem(clearBtn)

main.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (evt.target === doodle) {
    window.open(`https://www.google.com/doodles`, '_blank')
  }
  if (evt.target === submitBtn && input.value) {
    window.open(`https://google.com/search?q=${input.value}`, '_blank')
  }
  if (evt.target.closest('.clear-btn')) {
    input.value = ''
    hiddenElem(clearBtn)
  }
})

input.addEventListener('input', (evt) => {
  return evt.target.value ? showElem(clearBtn) : hiddenElem(clearBtn);
})