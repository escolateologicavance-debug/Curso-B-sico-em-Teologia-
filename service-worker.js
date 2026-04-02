const CACHE_NAME = 'avance-v1';
const ASSETS = [
  './',
  './index.html',
  './materia1.html',
  './materia2.html',
  './materia3.html',
  './materia4.html',
  './materia5.html',
  './materia6.html',
  './materia7.html',
  './materia8.html',
  './materia9.html',
  './materia10.html',
  './bibliografia.html',
  './faq.html',
  './manifest.json',
  './icons/logomarca-192.png',
  './icons/logomarca-512.png'
];

// Instala e guarda os arquivos no cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  self.clients.claim();
});

// Tenta buscar na rede; se falhar (offline), busca no cache
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
