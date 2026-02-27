const PROXY_URL = "https://api.allorigins.win";

self.addEventListener('fetch', (event) => {
    const url = event.request.url;

    // Only proxy requests going to Poki or its CDN
    if (url.includes('poki.com')) {
        event.respondWith(
            fetch(PROXY_URL + encodeURIComponent(url))
        );
    }
});
