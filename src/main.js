import "../src/style.scss"

const input = document.querySelector('.input');
const submitBtn = document.querySelector('.submit-btn');
const clearBtn = document.querySelector('.clear-btn');

clearBtn.addEventListener('click', () => {
  input.value = ''
  hiddenElem(clearBtn)
})

submitBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (input.value) {
    window.open(`https://google.com/search?q=${input.value}`, '_blank')
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