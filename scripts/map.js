let map;
let directionsService;
let directionsRenderer;

// Стиль для тёмной темы карты
const darkModeStyles = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#f8f8ff",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#484848",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
    ],
  },
];

function createCustomControls(map) {
  const controlDiv = document.createElement("div");
  let language = localStorage.getItem("language");

  // Создаем контейнер для кнопок
  // Создаем контейнер для кнопок
  const buttonContainer = document.createElement("div");
  buttonContainer.style.backgroundColor = "#333";
  buttonContainer.style.borderRadius = "10px";
  buttonContainer.style.padding = "10px";
  buttonContainer.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  buttonContainer.style.margin = "10px";
  buttonContainer.style.display = "flex";
  buttonContainer.style.flexDirection = "column";
  buttonContainer.style.position = "absolute";
  buttonContainer.style.top = "10px";
  buttonContainer.style.right = "10px"; // Используем правую сторону для расположения кнопки
  buttonContainer.style.zIndex = "10"; // Убедитесь, что контроллер находится поверх карты
  buttonContainer.style.padding = "20px";
  buttonContainer.classList.add("mapBtnContainer");

  const satelliteImg = document.createElement("img");
  satelliteImg.src = "./img/satellite.svg"; // Указываем URL картинки
  satelliteImg.alt = "Satellite View"; // Задаем альтернативный текст (по желанию)
  satelliteImg.style.width = "30px"; // Можно задать размер картинки
  satelliteImg.style.height = "30px"; // Можно задать размер картинки

  // Кнопка для переключения на спутниковый режим
  const satelliteButton = document.createElement("button");
  satelliteButton.appendChild(satelliteImg);
  satelliteButton.style.backgroundColor = "#444"; // Темный фон для кнопки
  satelliteButton.style.color = "#fff"; // Белый текст
  satelliteButton.style.border = "none";
  satelliteButton.style.padding = "10px";
  satelliteButton.style.marginBottom = "10px"; // Отступ снизу для разделения кнопок
  satelliteButton.style.fontSize = "16px";
  satelliteButton.style.cursor = "pointer";
  satelliteButton.style.borderRadius = "5px";
  satelliteButton.style.transition = "background-color 0.3s"; // Плавное изменение фона при наведении

  satelliteButton.addEventListener("click", () => {
    map.setMapTypeId(google.maps.MapTypeId.SATELLITE); // Переключаем карту на спутник
  });

  satelliteButton.addEventListener("mouseover", () => {
    satelliteButton.style.backgroundColor = "#555"; // Меняем цвет при наведении
  });

  satelliteButton.addEventListener("mouseout", () => {
    satelliteButton.style.backgroundColor = "#444"; // Восстанавливаем исходный цвет
  });

  buttonContainer.appendChild(satelliteButton);

  const roadMapImg = document.createElement("img");
  roadMapImg.src = "./img/map.svg"; // Указываем URL картинки
  roadMapImg.alt = "Satellite View"; // Задаем альтернативный текст (по желанию)
  roadMapImg.style.width = "30px"; // Можно задать размер картинки
  roadMapImg.style.height = "30px"; // Можно задать размер картинки

  // Кнопка для переключения на обычный режим карты
  const roadMapButton = document.createElement("button");
  roadMapButton.appendChild(roadMapImg);
  roadMapButton.style.backgroundColor = "#444"; // Темный фон для кнопки
  roadMapButton.style.color = "#fff"; // Белый текст
  roadMapButton.style.border = "none";
  roadMapButton.style.padding = "10px";
  roadMapButton.style.marginBottom = "10px";
  roadMapButton.style.fontSize = "16px";
  roadMapButton.style.cursor = "pointer";
  roadMapButton.style.borderRadius = "5px";
  roadMapButton.style.transition = "background-color 0.3s"; // Плавное изменение фона при наведении

  roadMapButton.addEventListener("click", () => {
    map.setMapTypeId(google.maps.MapTypeId.ROADMAP); // Переключаем карту на обычную
  });

  roadMapButton.addEventListener("mouseover", () => {
    roadMapButton.style.backgroundColor = "#555"; // Меняем цвет при наведении
  });

  roadMapButton.addEventListener("mouseout", () => {
    roadMapButton.style.backgroundColor = "#444"; // Восстанавливаем исходный цвет
  });

  buttonContainer.appendChild(roadMapButton);

  // Кнопка для увеличения масштаба
  const zoomInButton = document.createElement("button");
  zoomInButton.textContent = "+";
  zoomInButton.style.backgroundColor = "#444";
  zoomInButton.style.color = "#fff";
  zoomInButton.style.border = "none";
  zoomInButton.style.padding = "10px";
  zoomInButton.style.marginBottom = "10px";
  zoomInButton.style.fontSize = "24px";
  zoomInButton.style.cursor = "pointer";
  zoomInButton.style.borderRadius = "5px";
  zoomInButton.style.transition = "background-color 0.3s";

  zoomInButton.addEventListener("click", () => {
    const zoom = map.getZoom();
    map.setZoom(zoom + 1); // Увеличиваем масштаб
  });

  zoomInButton.addEventListener("mouseover", () => {
    zoomInButton.style.backgroundColor = "#555";
  });

  zoomInButton.addEventListener("mouseout", () => {
    zoomInButton.style.backgroundColor = "#444";
  });

  buttonContainer.appendChild(zoomInButton);

  // Кнопка для уменьшения масштаба
  const zoomOutButton = document.createElement("button");
  zoomOutButton.textContent = "-";
  zoomOutButton.style.backgroundColor = "#444";
  zoomOutButton.style.color = "#fff";
  zoomOutButton.style.border = "none";
  zoomOutButton.style.padding = "10px";
  zoomOutButton.style.marginBottom = "10px";
  zoomOutButton.style.fontSize = "25px";
  zoomOutButton.style.cursor = "pointer";
  zoomOutButton.style.borderRadius = "5px";
  zoomOutButton.style.transition = "background-color 0.3s";

  zoomOutButton.addEventListener("click", () => {
    const zoom = map.getZoom();
    map.setZoom(zoom - 1); // Уменьшаем масштаб
  });

  zoomOutButton.addEventListener("mouseover", () => {
    zoomOutButton.style.backgroundColor = "#555";
  });

  zoomOutButton.addEventListener("mouseout", () => {
    zoomOutButton.style.backgroundColor = "#444";
  });

  buttonContainer.appendChild(zoomOutButton);

  const fullscreenImg = document.createElement("img");
  fullscreenImg.src = "./img/fullscreen.svg"; // Указываем URL картинки
  fullscreenImg.alt = "Fullscreen View"; // Задаем альтернативный текст (по желанию)
  fullscreenImg.style.width = "30px"; // Можно задать размер картинки
  fullscreenImg.style.height = "30px"; // Можно задать размер картинки

  // Кнопка для переключения на полноэкранный режим
  const fullscreenButton = document.createElement("button");
  fullscreenButton.appendChild(fullscreenImg);
  fullscreenButton.style.backgroundColor = "#444";
  fullscreenButton.style.color = "#fff";
  fullscreenButton.style.border = "none";
  fullscreenButton.style.padding = "10px";
  fullscreenButton.style.marginBottom = "10px";
  fullscreenButton.style.fontSize = "16px";
  fullscreenButton.style.cursor = "pointer";
  fullscreenButton.style.borderRadius = "5px";
  fullscreenButton.style.transition = "background-color 0.3s";

  fullscreenButton.addEventListener("click", () => {
    const elem = document.getElementById("map");
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
  });

  fullscreenButton.addEventListener("mouseover", () => {
    fullscreenButton.style.backgroundColor = "#555";
  });

  fullscreenButton.addEventListener("mouseout", () => {
    fullscreenButton.style.backgroundColor = "#444";
  });

  buttonContainer.appendChild(fullscreenButton);

  // Добавляем контейнер с кнопками на карту
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(buttonContainer);
}

// Функция для инициализации карты
function initMap() {
  const targetLocation = { lat: 41.7117567, lng: 44.7560103 };

  // Получаем язык из localStorage
  const language = localStorage.getItem("language") || "en";

  // Создаем карту с тёмной темой
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: targetLocation,
    styles: darkModeStyles, // Применяем стиль для тёмной темы
    language: language, // Устанавливаем язык карты
    disableDefaultUI: true,
  });

  createCustomControls(map); // Добавляем кастомные кнопки

  // Добавляем маркер
  const marker = new google.maps.Marker({
    position: targetLocation,
    map: map,
    title: "LBP Office",
  });

  // Создаем сервис и рендерер для маршрутов
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map);
}

// Функция для удаления старого скрипта и карты, и загрузки нового скрипта с языком
function loadMapWithLanguage(language) {
  // Удаляем старый скрипт, если он существует
  const oldScript = document.getElementById("google-map-script");
  if (oldScript) {
    oldScript.remove();
  }

  // Удаляем старую карту
  const mapContainer = document.getElementById("map");
  mapContainer.innerHTML = ""; // Очищаем контейнер карты

  // Создаём новый скрипт с нужным языком
  const script = document.createElement("script");
  script.id = "google-map-script"; // Устанавливаем ID для скрипта
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBkhC46ixwuV5IP1-15iT8FgwxdNF07MaE&callback=initMap&language=${language}`;
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);
}

// Функция для изменения языка и обновления карты
function changeLanguage(language) {
  localStorage.setItem("language", language); // Обновляем язык в localStorage
  document.documentElement.lang = language; // Изменяем атрибут lang в HTML

  // Загружаем файл с переводами и применяем текст
  loadLanguageFile(language).then((languageData) => {
    applyText(languageData);

    if (language === "ka") {
      document.body.style.fontFamily = "'Noto Sans Georgian', sans-serif";
    } else {
      document.body.style.fontFamily = "'Montserrat', sans-serif";
    }

    // После изменения языка, обновляем карту
    loadMapWithLanguage(language); // Перезагружаем карту с новым языком
  });
}

// При загрузке страницы проверяем язык из localStorage и применяем его
document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("language") || "en"; // по умолчанию английский
  changeLanguage(savedLanguage);

  const languageSelector = document.getElementById("languageSelector");
  if (languageSelector) {
    languageSelector.value = savedLanguage;
  }
});
