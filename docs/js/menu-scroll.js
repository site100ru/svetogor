/**
 * Появление фиксированного заголовка при прокрутке
 * 
 * При прокрутке страницы больше чем на 100px, элемент с id="sliding-header"
 * получает класс "visible", благодаря которому он может, например, фиксироваться или анимированно появляться.
 * При прокрутке обратно вверх (меньше 100px) класс удаляется.
 * 
 * Используется флаг isVisible, чтобы избежать лишних изменений DOM.
 */

document.addEventListener('DOMContentLoaded', function () {
  const header = document.getElementById('sliding-header');
  let isVisible = false;

  window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > 100 && !isVisible) {
      header.classList.add('visible');
      isVisible = true;
    } else if (scrollTop <= 100 && isVisible) {
      header.classList.remove('visible');
      isVisible = false;
    }
  });
});
