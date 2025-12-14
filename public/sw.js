// public/sw.js
const CACHE_NAME = "skatfx-v1";
const STATIC_CACHE = "skatfx-static-v1";
const FONT_CACHE = "skatfx-fonts-v1";

// Core files to cache immediately
const CORE_ASSETS = ["/", "/manifest.webmanifest", "/favicon.ico", "/icon0.svg", "/icon1.png", "/apple-icon.png"];

// Install event - cache core assets
self.addEventListener("install", event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(STATIC_CACHE).then(cache => {
      return cache.addAll(CORE_ASSETS).catch(err => {
        // biome-ignore lint/suspicious/noConsole: error for failing to load cache
        console.error("Cache addAll failed:", err);
      });
    })
  );
});

// Activate event - cleanup old caches
self.addEventListener("activate", event => {
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => {
              return (
                cacheName.startsWith("skatfx-") &&
                cacheName !== CACHE_NAME &&
                cacheName !== STATIC_CACHE &&
                cacheName !== FONT_CACHE
              );
            })
            .map(cacheName => caches.delete(cacheName))
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener("fetch", event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== "GET") {
    return;
  }

  // Handle Next.js font files (/__nextjs_font/...)
  if (url.pathname.startsWith("/__nextjs_font/")) {
    event.respondWith(
      caches.open(FONT_CACHE).then(cache => {
        return cache.match(request).then(response => {
          if (response) return response;

          return fetch(request).then(networkResponse => {
            if (networkResponse.status === 200) {
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          });
        });
      })
    );
    return;
  }

  // Handle preloaded font files (/_next/static/media/...)
  if (
    url.pathname.startsWith("/_next/static/media/") &&
    (url.pathname.endsWith(".woff2") || url.pathname.endsWith(".woff"))
  ) {
    event.respondWith(
      caches.open(FONT_CACHE).then(cache => {
        return cache.match(request).then(response => {
          if (response) return response;

          return fetch(request).then(networkResponse => {
            if (networkResponse.status === 200) {
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          });
        });
      })
    );
    return;
  }

  // Handle Next.js static assets (CSS, JS chunks)
  if (url.pathname.startsWith("/_next/static/")) {
    event.respondWith(
      caches.open(STATIC_CACHE).then(cache => {
        return cache.match(request).then(response => {
          if (response) return response;

          return fetch(request)
            .then(networkResponse => {
              if (networkResponse.status === 200) {
                cache.put(request, networkResponse.clone());
              }
              return networkResponse;
            })
            .catch(() => response);
        });
      })
    );
    return;
  }

  // Handle navigation requests (HTML pages) - since it's a single page, just cache "/"
  if (request.mode === "navigate") {
    event.respondWith(
      caches.match("/").then(cachedResponse => {
        if (cachedResponse) return cachedResponse;

        return fetch(request).then(response => {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put("/", responseClone);
          });
          return response;
        });
      })
    );
    return;
  }

  // Handle static assets (icons, manifest, favicon)
  if (url.pathname.match(/\.(ico|png|svg|webmanifest)$/)) {
    event.respondWith(
      caches.match(request).then(response => {
        if (response) return response;

        return fetch(request).then(networkResponse => {
          if (networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(STATIC_CACHE).then(cache => {
              cache.put(request, responseClone);
            });
          }
          return networkResponse;
        });
      })
    );
    return;
  }

  // Default: network first, fallback to cache
  event.respondWith(
    fetch(request)
      .then(response => {
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        return caches.match(request);
      })
  );
});
