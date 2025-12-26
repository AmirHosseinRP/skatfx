const cacheName = "v1";

// Install event - activate immediately
self.addEventListener("install", () => {
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener("activate", event => {
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames => {
        return Promise.all(cacheNames.filter(name => name !== cacheName).map(name => caches.delete(name)));
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);

  if (!url.protocol.startsWith("http")) {
    return;
  }

  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    cacheClone(event)
      .catch(() => caches.match(event.request))
      .then(res => res)
  );
});

const cacheClone = async e => {
  const res = await fetch(e.request);
  const resClone = res.clone();

  const cache = await caches.open(cacheName);
  await cache.put(e.request, resClone);
  return res;
};
