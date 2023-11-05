import { hiddenElem, showElem, toggleText, handleChange } from "./utils.js"

const body = document.querySelector('body')
const toggleTheme = document.querySelector('.toggle-theme');
const icon = document.querySelector('.toggle-theme__icon');
const settingMenu = document.querySelector('.setting');
const settingBtn = document.querySelector('.setting-btn');

toggleText(icon);

toggleTheme.addEventListener('mouseover', () => {
  icon.style.opacity = 1;
})

toggleTheme.addEventListener('mouseout', () => {
  icon.style.opacity = 0;
})

toggleTheme.addEventListener('click', () => {
  icon.classList.toggle('dark')
  toggleText(icon)
  hiddenElem(settingMenu);
  handleChange(body)
})

settingBtn.addEventListener('click', () => {
  if (settingMenu.classList.contains('display-none')) {
    showElem(settingMenu)
  }
  else {
    hiddenElem(settingMenu);
  }
})

window.addEventListener("click", (evt) => {
  const target = evt.target;
  if (!target.closest('.setting') && !target.closest('.setting-btn')) {
    hiddenElem(settingMenu);
  }
})

window.addEventListener('keydown', function (e) {
  if (e.keyCode == 27) {
    hiddenElem(settingMenu);
  }
});