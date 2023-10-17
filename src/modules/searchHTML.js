const search = document.querySelector('.search-section');
search.innerHTML =
`
<div class="search-form">
  <form action="" method="post" id="search">
    <div class="search-input">
      <span class="btn search-btn"></span>
      <input class="input" type="text" name="name" id="name" required title="Поиск" autocorrect="off" autofocus
        aria-label="Найти">
      <div class="btn-group">
        <div class="clear-btn display-none" title="Очистить">
          <span class="btn clear-input"></span>
          <span class="border-right"></span>
        </div>
        <span class="btn keyboard" title="Экранная клавиатура"></span>
        <span class="btn microphone" title="Голосовой поиск"></span>
        <span class="btn photo" title="Поиск по картинке"></span>
      </div>
    </div>
  </form>
</div>
`