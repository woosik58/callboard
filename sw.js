// 최소 서비스워커: 앱 설치(홈 화면 추가)를 가능하게 하기 위한 용도입니다.
// 호출 데이터는 항상 최신 상태가 중요하므로 캐싱하지 않고 그대로 네트워크로 전달합니다.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
