const CACHE_NAME = 'tower-of-hanoi-v1';
const URLS_TO_CACHE = [
  'style.css',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js',
  'script.js',
  'assets/me.jpg',
  'assets/icon/48x48.png',
  'assets/icon/72x72.png',
  'assets/icon/96x96.png',
  'assets/icon/120x120.png',
  'assets/icon/144x144.png',
  'assets/icon/168x168.png',
  'assets/icon/192x192.png'
];


self.addEventListener('install', function(installation) {
  installation.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache){
      return cache.addAll(URLS_TO_CACHE);
    })
  );

});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      if(response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
