import "../src/style.scss"
import "./modules/headerHTML"

const input = document.querySelector('.input');
const searchBtn = document.querySelector('.search-btn');
const clearBtn = document.querySelector('.clear-btn');

clearBtn.addEventListener('click', () => {
  input.value = ''
  hiddenElem(clearBtn)
})

searchBtn.addEventListener('click', (evt) => {
  evt.preventDefault();

  window.open('https://google.com/', '_blank')
})

input.addEventListener('input', (evt) => {
  let showClearBtn = evt.target.value ? showElem(clearBtn) : hiddenElem(clearBtn);
  return showClearBtn;
})

function hiddenElem(elem) {
  elem.classList.add('display-none');
}

function showElem(elem) {
  elem.classList.remove('display-none')
}