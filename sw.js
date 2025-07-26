const cacheName = "offline-v1";
const assets = [
  "./",
  "./placeholder.png",
  "./fonts/Mojangles.ttf",
  "./fonts/Minecraft-Ten.otf",
  "./fonts/Minecraft-Five.otf",
  "./icons/Bg.png",
  "./icons/button_default.png",
  "./icons/button_pressed_hover.png",
  "./icons/checked.png",
  "./icons/uncheck.png",
  "./icons/dialog_background.png",
  "./icons/edit_image.png",
  "./index.html",
  "./style.css",
  "./script.js",
  "./jszip/jszip.js"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(assets))
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
