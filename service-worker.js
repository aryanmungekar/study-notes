const CACHE_NAME = "sppu-notes-v1";
const OFFLINE_FILES = [
  "/",
  "/index.html",
  "/assets/css/style.css",      // your main CSS
  "/assets/js/subject-loader.js",  // your subject JS
  "/assets/load/viewer.html",  // viewer
  "/web-app-manifest-192x192.png",
  "/web-app-manifest-512x512.png",
  // Add more files if needed
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(OFFLINE_FILES))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }))
    )
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => {
      return res || fetch(event.request);
    })
  );
});
