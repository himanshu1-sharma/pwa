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
                '/',
                '/about'
            ])
        })
    )
})

//fetch cache files
this.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((res) => {
                if (res) {
                    return res
                }
                let requestUrl = event.request.clone();
                fetch(requestUrl)
            })
        )
    }
})