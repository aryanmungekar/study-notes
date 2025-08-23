// ✅ Update this when you deploy
const CACHE_NAME = "sppu-notes-v11";  

// Precache essential offline assets
const OFFLINE_FILES = [
  "/", 
  // "/index.html",
  "/web-app-manifest-192x192.png",
  "/web-app-manifest-512x512.png",
];

// INSTALL: Pre-cache core files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(OFFLINE_FILES))
  );
  self.skipWaiting(); // activate immediately
});

// ACTIVATE: Clean up old caches + refresh clients
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
  // 🔄 Force open tabs to reload when SW updates
  self.clients.matchAll({ type: "window" }).then((clients) => {
    clients.forEach((client) => client.navigate(client.url));
  });
});

// FETCH: Apply caching strategies
self.addEventListener("fetch", (event) => {
  const req = event.request;

  // 1️⃣ Always network for CSS & JS (fallback to cache if offline)
  if (req.destination === "style" || req.destination === "script") {
    event.respondWith(fetch(req).catch(() => caches.match(req)));
    return;
  }

  // 2️⃣ Stale-while-revalidate for images
  if (req.destination === "image") {
    event.respondWith(staleWhileRevalidate(req));
    return;
  }

  // 3️⃣ Default: Try cache, then network, fallback to offline page
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

async function staleWhileRevalidate(req) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(req);

  const fresh = fetch(req).then((res) => {
    cache.put(req, res.clone());
    return res;
  }).catch(() => cached);

  return cached || fresh;
}
