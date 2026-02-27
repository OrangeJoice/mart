// Use a more robust raw proxy link
const PROXY = "https://api.allorigins.win";

self.addEventListener('fetch', (event) => {
    const url = event.request.url;

    // Intercept anything going to Poki or its CDN
    if (url.includes('poki.com')) {
        const proxiedUrl = PROXY + encodeURIComponent(url);
        event.respondWith(
            fetch(proxiedUrl, {
                mode: 'cors',
                credentials: 'omit'
            })
        );
    }
});
