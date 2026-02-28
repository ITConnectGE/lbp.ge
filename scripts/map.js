let map;

const targetLocation = [41.7117567, 44.7560103];

const darkTileUrl =
  "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";
const satelliteTileUrl =
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";
const defaultTileUrl = darkTileUrl;

let currentTileLayer;

function initMap() {
  const mapContainer = document.getElementById("map");
  if (!mapContainer) return;

  map = L.map("map", {
    center: targetLocation,
    zoom: 14,
    zoomControl: false,
  });

  currentTileLayer = L.tileLayer(defaultTileUrl, {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    maxZoom: 19,
  }).addTo(map);

  L.marker(targetLocation).addTo(map).bindPopup("LBP Office");

  createCustomControls();
}

function switchTiles(url) {
  map.removeLayer(currentTileLayer);
  currentTileLayer = L.tileLayer(url, { maxZoom: 19 }).addTo(map);
}

function createCustomControls() {
  const basePath =
    document.querySelector('meta[name="base-path"]')?.content || ".";

  const container = document.createElement("div");
  container.style.cssText =
    "position:absolute;top:10px;right:10px;z-index:1000;background:#333;border-radius:10px;padding:20px;display:flex;flex-direction:column;box-shadow:0 4px 6px rgba(0,0,0,0.1)";
  container.classList.add("mapBtnContainer");

  function makeBtn(content, onClick) {
    const btn = document.createElement("button");
    btn.style.cssText =
      "background:#444;color:#fff;border:none;padding:10px;margin-bottom:10px;font-size:16px;cursor:pointer;border-radius:5px;transition:background-color 0.3s;display:flex;align-items:center;justify-content:center";
    if (typeof content === "string" && content.length <= 2) {
      btn.textContent = content;
      btn.style.fontSize = "24px";
    } else {
      const img = document.createElement("img");
      img.src = content;
      img.style.width = "30px";
      img.style.height = "30px";
      btn.appendChild(img);
    }
    btn.addEventListener("click", onClick);
    btn.addEventListener("mouseover", () => (btn.style.backgroundColor = "#555"));
    btn.addEventListener("mouseout", () => (btn.style.backgroundColor = "#444"));
    return btn;
  }

  container.appendChild(
    makeBtn(basePath + "/img/satellite.svg", () => switchTiles(satelliteTileUrl))
  );
  container.appendChild(
    makeBtn(basePath + "/img/map.svg", () => switchTiles(darkTileUrl))
  );
  container.appendChild(makeBtn("+", () => map.zoomIn()));
  container.appendChild(makeBtn("-", () => map.zoomOut()));
  container.appendChild(
    makeBtn(basePath + "/img/fullscreen.svg", () => {
      const elem = document.getElementById("map");
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else if (elem.requestFullscreen) {
        elem.requestFullscreen();
      }
    })
  );

  document.getElementById("map").appendChild(container);
}

document.addEventListener("DOMContentLoaded", () => {
  const script = document.createElement("script");
  script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
  script.onload = initMap;
  document.head.appendChild(script);
});
