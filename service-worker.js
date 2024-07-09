const CACHE_NAME = 'prototype-kolektif';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/css/styles.css',
  '/manifest.json',
  '/assets/js/main.js',
  
  '/assets/img/logo/kolektificon48.png',
  '/assets/img/logo/kolektificon72.png',
  '/assets/img/logo/kolektificon96.png',
  '/assets/img/logo/kolektificon128.png',
  '/assets/img/logo/kolektificon144.png',
  '/assets/img/logo/kolektificon192.png',

  '/assets/img/clients/client-1.png',
  '/assets/img/clients/client-2.png',
  '/assets/img/clients/client-3.png',
  '/assets/img/clients/client-4.png',
  '/assets/img/clients/client-5.png',
  '/assets/img/clients/client-6.png',
  '/assets/img/clients/client-7.png',
  '/assets/img/clients/client-8.png',

  '/assets/img/menu/menu1.PNG',
  '/assets/img/menu/menu2.PNG',
  '/assets/img/menu/menu3.PNG',
  '/assets/img/menu/menu4.PNG',

  '/assets/img/portfolio/portfolio-1.jpg',
  '/assets/img/portfolio/portfolio-2.jpg',
  '/assets/img/portfolio/portfolio-3.jpg',
  '/assets/img/portfolio/portfolio-4.jpg',
  '/assets/img/portfolio/portfolio-5.jpg',
  '/assets/img/portfolio/portfolio-6.jpg',
  '/assets/img/portfolio/portfolio-7.jpg',
  '/assets/img/portfolio/portfolio-8.jpg',
  '/assets/img/portfolio/portfolio-9.jpg',
  '/assets/img/portfolio/portfolio-details-1.jpg',
  '/assets/img/portfolio/portfolio-details-2.jpg',
  '/assets/img/portfolio/portfolio-details-3.jpg',

  '/assets/img/slide/slide-17.jpg',

  '/assets/img/team/team-1.jpg',
  '/assets/img/team/team-2.jpg',
  '/assets/img/team/team-3.jpg',
  '/assets/img/team/team-4.jpg',

  '/assets/img/testimonials/testimonials-1.jpg',
  '/assets/img/testimonials/testimonials-2.jpg',
  '/assets/img/testimonials/testimonials-3.jpg',
  '/assets/img/testimonials/testimonials-4.jpg',
  '/assets/img/testimonials/testimonials-5.jpg',

  '/assets/img/about.jpg',
  '/assets/img/apple-touch-icon.png',
  '/assets/img/counts-img.jpg',
  '/assets/img/cta-bg.jpg',
  '/assets/img/favicon.png',
  '/assets/img/features.jpg',
  '/assets/img/hero-bg.jpg',
  '/assets/img/kolektificon.PNG',
  '/assets/img/testimonials-bg.jpg',

  '/assets/vendor/aos/aos.css',
  '/assets/vendor/aos/aos.js',
  '/assets/vendor/bootstrap/css/bootstrap-grid.css',
  '/assets/vendor/bootstrap/css/bootstrap-grid.min.css',
  '/assets/vendor/bootstrap/css/bootstrap-grid.rtl.css',
  '/assets/vendor/bootstrap/css/bootstrap-grid.min.css',
  '/assets/vendor/bootstrap/css/bootstrap-reboot.css',
  '/assets/vendor/bootstrap/css/bootstrap-reboot.min.css',
  '/assets/vendor/bootstrap/css/bootstrap-reboot.rtl.css',
  '/assets/vendor/bootstrap/css/bootstrap-reboot.css',
  '/assets/vendor/bootstrap/css/bootstrap-utilities.css',
  '/assets/vendor/bootstrap/css/bootstrap-utilities.min.css',
  '/assets/vendor/bootstrap/css/bootstrap-utilities.rtl.css',
  '/assets/vendor/bootstrap/css/bootstrap-utilities.min.css',
  '/assets/vendor/bootstrap/css/bootstrap.css',
  '/assets/vendor/bootstrap/css/bootstrap.min.css',
  '/assets/vendor/bootstrap/css/bootstrap.rtl.css',
  '/assets/vendor/bootstrap/css/bootstrap.rtl.min.css',
  '/assets/vendor/bootstrap/js/bootstrap.bundle.js',
  '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
  '/assets/vendor/bootstrap/js/bootstrap.esm.js',
  '/assets/vendor/bootstrap/js/bootstrap.esm.min.js',
  '/assets/vendor/bootstrap/js/bootstrap.js',
  '/assets/vendor/bootstrap/js/bootstrap.min.js',
  '/assets/vendor/remixicon/remixicon.css',
  '/assets/vendor/remixicon/remixicon.eot',
  '/assets/vendor/remixicon/remixicon.less',
  '/assets/vendor/remixicon/remixicon.svg',
  '/assets/vendor/remixicon/remixicon.symbol.svg',
  '/assets/vendor/remixicon/remixicon.ttf',
  '/assets/vendor/remixicon/remixicon.woff',
  '/assets/vendor/remixicon/remixicon.woff2',
  '/assets/vendor/swiper/swiper-bundle.min.css',
  '/assets/vendor/swiper/swiper-bundle.min.js',

  '/assets/vendor/bootstrap-icons/fonts/bootstrap-icons.woff',
  '/assets/vendor/bootstrap-icons/fonts/bootstrap-icons.woff2',
  '/assets/vendor/bootstrap-icons/bootstrap-icons.css',
  '/assets/vendor/bootstrap-icons/bootstrap-icons.json',
  '/assets/vendor/bootstrap-icons/index.html',
  '/assets/vendor/boxicons/css/animation.css',
  '/assets/vendor/boxicons/css/boxicon.min.css',
  '/assets/vendor/boxicons/css/transformations.css',
  '/assets/vendor/boxicons/fonts/boxicon.eot',
  '/assets/vendor/boxicons/fonts/boxicon.svg',
  '/assets/vendor/boxicons/fonts/boxicon.ttf',
  '/assets/vendor/boxicons/fonts/boxicon.woff',
  '/assets/vendor/boxicons/fonts/boxicon.woff2',
  '/assets/vendor/glightbox/css/glightbox.css',
  '/assets/vendor/glightbox/css/glightbox.min.css',
  '/assets/vendor/glightbox/css/js/glighbox.js',
  '/assets/vendor/glightbox/css/js/glighbox.min.js',
  '/assets/vendor/isotop-layout/isotop.pkgd.js',
  '/assets/vendor/isotop-layout/isotop.pkgd.min.js',
  '/assets/vendor/php-email-form/validate.js',
  '/assets/vendor/purecounter.js',
  

  '/forms/contact.php',
  '/in&out-page.html',
  '/index.html',
  '/menu-page.html',
  '/portfolio-details.html',
  '/sewa-ruangan.html',
  
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.error('Failed to cache files during install:', error);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Mengembalikan respons dari cache jika tersedia
        }
        // Jika tidak ada di cache, ambil dari jaringan
        return fetch(event.request)
          .then(fetchResponse => {
            if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
              return fetchResponse;
            }

            const responseToCache = fetchResponse.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache); // Menyimpan respons ke cache
              });

            return fetchResponse;
          })
          .catch(error => {
            console.error('Fetch failed:', error);
            throw error;
          });
      })
  );
});
