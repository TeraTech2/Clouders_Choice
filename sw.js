const app = "TeraTech";
const urlsToPrefetch = [
    // images & pages
    'main.css',
    'main.js',
    'static/media/ems3.PNG',
    'static/media/image1.jpg',
    'static/media/Main_image.jpg',
    'static/media/image3.png',
    'static/media/webdevelopment.jpg',
    'static/media/ems5.PNG',
    'static/media/ems4.PNG',
    'static/media/bootstrap-icons.woff?',
    'static/media/GCP.png',
    'static/media/bootstrap-icons.woff2?',
    'static/media/AWS.png',
    'static/media/Azure.png',
    'static/media/main-logo.png',
    'static/media/ems2.PNG',
    'static/media/MobileAppDevelopment.jpg',
    'static/media/contactUS.jpg',
    'static/media/cloudcomputing.jpg',
    'static/media/1.webp',
    'static/media/2.webp',
    'static/media/Devops.png',
    'static/media/ems1.PNG',
    'static/media/3.webp',
    'static/media/support.jpg',
    'static/media/flexible-schedule.jpg',
    'static/media/instructor-led.jpg',
    'static/media/upgrade.jpg',
    'static/media/certification.jpg',
    'static/media/exercises.jpg',
    'static/media/self-pace-video.jpg',
    'static/media/Visual_Design.svg',
    'static/media/SQL_Server.png',
    'static/media/8.png',
    'static/media/2.png',
    'static/media/7.png',
    'static/media/Scalable_Products.svg',
    'static/media/Cross-Platform_Mobile_App_dev.svg',
    'static/media/Eficient-Resource-Management.svg',
    'static/media/Android_Mobile_App_dev.svg',
    'static/media/iOS_Mobile_App_dev.svg',
    'static/media/ems6.PNG',
    'index.html',
    'main.c87a12be.css.map',
    'main.5b505906.js.map'
    // js
    // '/static/js/main.5b505906.js.map',
    // '/static/css/main.c87a12be.css.map',
    // // "static/js/bundle.js",
    // "manifest.json",
    // "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
    // "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js",
    // "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js",

    // fonts & icons & css
    // "static/css/main.c87a12be.css",
    // "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDz8Z1xlFQ.woff2",
    // "/static/media/bootstrap-icons.b2e5aab643c6f0fd2da6.woff2",
    // "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
];

this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(app)
            .then(cache => {
                return cache.addAll(urlsToPrefetch);
            })
    )
});

this.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        event.respondWith(caches.match(event.request)).then(res => {
            if (res) {
                return res
            }
        })
    }
})