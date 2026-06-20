// Service Worker — Motocultor 2026
// Cache-first : une fois l'app chargée une fois, tout fonctionne hors ligne.
const CACHE_NAME = "motocultor2026-v3";
const ASSETS = [
  "./",
  "./index.html",
  "./data.js",
  "./bands.js",
  "./manifest.json",
  "./icon.svg",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  // Laisser passer les requêtes externes (Spotify oEmbed, pochettes d'album,
  // images Wikimedia) sans tenter de les mettre en cache applicatif : elles
  // sont gérées par le cache HTTP normal du navigateur, et ça évite tout
  // souci avec les réponses "opaque" cross-origin.
  if (url.origin !== self.location.origin) {
    return; // laisse le navigateur gérer nativement (pas de respondWith)
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match("./index.html"));
    })
  );
});
