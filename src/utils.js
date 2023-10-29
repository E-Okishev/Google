export function hiddenElem(elem) {
  elem.classList.add('display-none');
}

export function showElem(elem) {
  elem.classList.remove('display-none')
}

const text = document.querySelector('.toggle-theme__text');

export function toggleText(elem) {
  if (elem.classList.contains('dark')) {
    text.textContent = 'Тёмная тема: вкл.';
  } else {
    text.textContent = 'Тёмная тема: откл.';
  }
}