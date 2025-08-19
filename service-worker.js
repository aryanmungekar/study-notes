const CACHE_NAME = "sppu-notes-v7";  // ⬅️ Increment this on every update!

const OFFLINE_FILES = [
  // "/",
  // "/index.html",
  // "/assets/css/style.css",
  // "/assets/js/viewer-loader.js",
  // "/assets/load/viewer.html",
  "/web-app-manifest-192x192.png",
  "/web-app-manifest-512x512.png",
  // Add more static files here
];

// INSTALL: Pre-cache app shell
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(OFFLINE_FILES);
    })
  );
  self.skipWaiting(); // Activate SW immediately
});

// ACTIVATE: Delete old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("Deleting old cache:", key);
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim(); // Take control of clients immediately
});

// FETCH: Try cache first, fallback to network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
