// Service Worker for offline support
const CACHE_NAME = 'child-word-v1';
const urlsToCache = [
  './index.html',
  './pc.html',
  './vocabulary.js',
  './manifest.json',
  './'
];

// インストール時にキャッシュを作成
self.addEventListener('install', event => {
  console.log('[Service Worker] インストール中...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] ファイルをキャッシュ中...');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('[Service Worker] インストール完了');
        return self.skipWaiting(); // 即座にアクティブ化
      })
      .catch(error => {
        console.error('[Service Worker] キャッシュエラー:', error);
      })
  );
});

// アクティベーション時に古いキャッシュを削除
self.addEventListener('activate', event => {
  console.log('[Service Worker] アクティベーション中...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] 古いキャッシュを削除:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[Service Worker] アクティベーション完了');
      return self.clients.claim(); // 即座に制御開始
    })
  );
});

// フェッチイベント：キャッシュファーストで応答
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // キャッシュにあればそれを返す
        if (response) {
          console.log('[Service Worker] キャッシュから返却:', event.request.url);
          return response;
        }

        // キャッシュになければネットワークから取得
        console.log('[Service Worker] ネットワークから取得:', event.request.url);
        return fetch(event.request).then(response => {
          // 有効なレスポンスかチェック
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // レスポンスをクローンしてキャッシュに保存
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        }).catch(error => {
          console.error('[Service Worker] フェッチエラー:', error);
          // オフライン時のフォールバック（必要に応じて）
          return new Response('オフラインです', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({
              'Content-Type': 'text/plain'
            })
          });
        });
      })
  );
});

// メッセージイベント：キャッシュの更新など
self.addEventListener('message', event => {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});
