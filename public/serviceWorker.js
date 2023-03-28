//setting the inside the cache

let cacheData = "appV1";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/bundle.js',
                '/manifest.json',
                '/favicon.ico',
                '/index.html',
                '/'
            ])
        })
    )
})

//fetch cache files
this.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((res) => {
            if (res) {
                return res
            }
        })
    )
})