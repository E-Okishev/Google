const header = document.querySelector('header');
header.innerHTML =
  `
  <nav class="nav">
    <ul class="nav__items">
      <li><a class="nav__link link" aria-label="Почта" href="#">Почта</a></li>
      <li><a class="nav__link link" aria-label="Картинки" href="#">Картинки</a></li>
      <li>
        <div class="apps"><a aria-label="Приложения Google" href="#">
          <img class="apps__btn" src="./img/svg/apps.svg" alt="Google apps">
        </a></div>
      </li>
      <li><a class="login-btn" aria-label="Войти в аккаунт Google" href="#">Войти</a></li>
    </ul>
    </nav>
`