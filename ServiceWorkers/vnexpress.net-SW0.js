importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.core.skipWaiting();
workbox.core.clientsClaim();

// cache name
workbox.core.setCacheNameDetails({
    prefix: 'VnExpress-Cache',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'run-time',
});

workbox.routing.registerRoute(
    new RegExp('^https://s1.vnecdn.net/vnexpress/restruct/i/'),
    new workbox.strategies.CacheFirst({
        cacheName: 'VnExpress-Images',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 100,
                maxAgeSeconds: 1 * 24 * 60 * 60, // 30 Days
            }),
            new workbox.cacheableResponse.Plugin({
                statuses: [200],
            })
        ],
    })
);

workbox.routing.registerRoute(
    new RegExp('^https://s1.vnecdn.net/vnexpress/restruct/j/'),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'VnExpress-Js',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 100,
                maxAgeSeconds: 1 * 24 * 60 * 60, // 30 Days
            }),
            new workbox.cacheableResponse.Plugin({
                statuses: [200],
            })
        ]
    })
);

workbox.routing.registerRoute(
    new RegExp('^https://s1.vnecdn.net/vnexpress/restruct/c/'),
    new workbox.strategies.CacheFirst({
        cacheName: 'VnExpress-Css',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 100,
                maxAgeSeconds: 1 * 24 * 60 * 60, // 30 Days
            }),
            new workbox.cacheableResponse.Plugin({
                statuses: [200],
            })
        ]
    })
);

workbox.precaching.precacheAndRoute([]);
