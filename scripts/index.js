document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header"); // Получаем хедер
  const nav = document.querySelector(".nav");
  const burger = document.querySelector(".burger");
  const links = document.querySelectorAll(".nav a"); // Все якорные ссылки

  // Обработчик прокрутки для изменения класса "scrolled"
  if (header) {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > 80) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    }
  }

  // Функция для переключения меню
  function toggleMenu() {
    nav.classList.toggle("open");
    burger.classList.toggle("open");
  }

  // Закрыть меню
  function closeMenu() {
    nav.classList.remove("open");
    burger.classList.remove("open");
  }

  // Привязка события к бургеру
  burger.addEventListener("click", toggleMenu);

  // Закрываем меню при клике на якорные ссылки
  links.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Закрываем меню при клике на пустое место
  document.addEventListener("click", (event) => {
    if (
      !nav.contains(event.target) && // Если клик не внутри навигации
      !burger.contains(event.target) // И не внутри бургер-меню
    ) {
      closeMenu();
    }
  });
});
