const cacheName = "v1";

const cacheClone = async e => {
  const res = await fetch(e.request);
  const resClone = res.clone();

  const cache = await caches.open(cacheName);
  await cache.put(e.request, resClone);
  return res;
};

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
