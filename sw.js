const PROXY = "https://api.allorigins.win";

self.addEventListener('fetch', (event) => {
    const url = event.request.url;
    // Proxy everything from Poki's domains
    if (url.includes('poki.com') || url.includes('poki-gdn.com')) {
        event.respondWith(
            fetch(PROXY + encodeURIComponent(url), { mode: 'cors' })
        );
    }
});
