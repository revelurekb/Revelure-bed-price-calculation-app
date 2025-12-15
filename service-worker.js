const CACHE_NAME = 'bed-calc-v1';
const BASE_PATH = '/Revelure-bed-price-calculation-app/';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        BASE_PATH,
        BASE_PATH + 'index.html',
        BASE_PATH + 'image.png',
        BASE_PATH + 'icon-192.png',
        BASE_PATH + 'icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
