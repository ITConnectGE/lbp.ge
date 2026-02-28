const cursorShadow = document.querySelector(".cursor-shadow");

// Обновляем позицию тени на каждом движении мыши
document.addEventListener("mousemove", (e) => {
  cursorShadow.style.top = `${e.clientY}px`;
  cursorShadow.style.left = `${e.clientX}px`;
});

// Функция для отображения тени
const showCursorShadow = () => {
  cursorShadow.style.opacity = "1";
};

// Функция для скрытия тени
const hideCursorShadow = (e) => {
  // Проверяем, ушёл ли курсор действительно за пределы элемента
  const relatedTarget = e.relatedTarget;
  if (!e.currentTarget.contains(relatedTarget)) {
    cursorShadow.style.opacity = "0";
  }
};

// Наводим на нужные элементы
document
  .querySelectorAll(
    ".header, .footer, .start, .services, .team, .photo, .item-container, .about, .map"
  )
  .forEach((element) => {
    element.addEventListener("mouseover", showCursorShadow);
    element.addEventListener("mouseout", hideCursorShadow);
  });
