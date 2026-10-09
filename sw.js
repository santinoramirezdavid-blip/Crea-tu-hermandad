const CACHE_NAME = "simulador-cofrade-beta-v2-9";
const ASSETS = ["./", "./index.html", "./styles.css", "./app.js", "./manifest.json", "./giralda-decor.svg"];
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))));
self.addEventListener("fetch", event => event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request))));
