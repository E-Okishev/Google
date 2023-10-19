import "../src/style.scss"

const input = document.querySelector('.input');
const submitBtn = document.querySelector('.submit-btn');
const clearBtn = document.querySelector('.clear-btn');
const doodle = document.querySelector('.doodle-btn');

window.addEventListener('click', (evt) => {
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

function hiddenElem(elem) {
  elem.classList.add('display-none');
}

function showElem(elem) {
  elem.classList.remove('display-none')
}