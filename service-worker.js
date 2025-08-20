// ✅ Update this when you deploy
const CACHE_NAME = "sppu-notes-v9";  

// Precache essential offline assets
const OFFLINE_FILES = [
  "/", 
  "/index.html",
  "/web-app-manifest-192x192.png",
  "/web-app-manifest-512x512.png",
];

// INSTALL: Pre-cache core files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(OFFLINE_FILES);
    })
  );
  self.skipWaiting(); // activate immediately
});

// ACTIVATE: Clean up old caches
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
  self.clients.claim();
});

// FETCH: Apply caching strategies
self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // 1️⃣ Network-first for CSS & JS
  if (req.destination === "style" || req.destination === "script") {
    event.respondWith(networkFirst(req));
    return;
  }

  // 2️⃣ Stale-while-revalidate for images
  if (req.destination === "image") {
    event.respondWith(staleWhileRevalidate(req));
    return;
  }

  // 3️⃣ Default: Try cache, then network, fallback to offline
  event.respondWith(
    caches.match(req).then((cached) => {
      return (
        cached ||
        fetch(req).catch(() => {
          if (req.mode === "navigate") {
            return caches.match("/index.html");
          }
        })
      );
    })
  );
});

// --------------------
// Helpers
// --------------------

async function networkFirst(req) {
  try {
    const fresh = await fetch(req);
    const cache = await caches.open(CACHE_NAME);
    cache.put(req, fresh.clone());
    return fresh;
  } catch (e) {
    return caches.match(req);
  }
}

async function staleWhileRevalidate(req) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(req);

  const fresh = fetch(req).then((res) => {
    cache.put(req, res.clone());
    return res;
  });

  return cached || fresh;
}
