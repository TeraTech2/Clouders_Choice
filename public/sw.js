const app = "TeraTech";
const urlsToPrefetch = [

    '/static/css/main.2b0f2780.css',
  '/static/js/main.5b505906.js',
  '/static/media/ems3.0d280f248b30a22e8da6.PNG',
  '/static/media/image1.bbef3cf4349ad6bb3db5.jpg',
  '/static/media/Main_image.6db544cbf03454aa4dfb.jpg',
  '/static/media/image3.2cdb8bd757766fb9076d.png',
  '/static/media/webdevelopment.52e5056a7709a1dcaad9.jpg',
  '/static/media/ems5.283d5b18ce1f5280be9b.PNG',
  '/static/media/ems4.6b8e93906a5c96421b42.PNG',
  '/static/media/bootstrap-icons.6959d0d983ee318f8880.woff',
  '/static/media/GCP.96ac8bac7e06fd62f888.png',
  '/static/media/bootstrap-icons.b2e5aab643c6f0fd2da6.woff2',
  '/static/media/AWS.5faee6c36f18b9996b6b.png',
  '/static/media/Azure.31fc8d9dce9130a90303.png',
  '/static/media/main-logo.f09f957e16d50c0b14ed.png',
  '/static/media/ems2.dc369dd123142a5ff25e.PNG',
  '/static/media/MobileAppDevelopment.2c408b3a4f03d3aa3dea.jpg',
  '/static/media/contactUS.e95de7a904ab7284db7a.jpg',
  '/static/media/cloudcomputing.80116460c899c45423c9.jpg',
  '/static/media/1.ef41481ed6b5423b9400.webp',
  '/static/media/2.a539ce7d49aa44639688.webp',
  '/static/media/Devops.18005bf9ddab27f7a4d4.png',
  '/static/media/ems1.96b1a0a4f6b824c59389.PNG',
  '/static/media/3.6cbd97257b16b528ac6e.webp',
  '/static/media/support.00451e8618b74c2cd9ec.jpg',
  '/static/media/flexible-schedule.c4b63035c6820cef58a5.jpg',
  '/static/media/instructor-led.330cce61f17190086727.jpg',
  '/static/media/upgrade.d2da8d1646ba4f251439.jpg',
  '/static/media/certification.d681a9b11893f7785d68.jpg',
  '/static/media/exercises.59fc677e16d9dc4a995f.jpg',
  '/static/media/self-pace-video.ab3af54e389037bbe7bb.jpg',
  '/static/media/Visual_Design.a73037e54c9e1e182fbd8a1fc69011e3.svg',
  '/static/media/SQL_Server.25bfdcadd50b9710100e.png',
  '/static/media/8.7dd524f1946ff4f1db88.png',
  '/static/media/2.3cfaf857fa65b48d1982.png',
  '/static/media/7.9b3d7d884f7d674fc9b1.png',
  '/static/media/Scalable_Products.d069ef340136611861f7c83499829dfd.svg',
  '/static/media/Cross-Platform_Mobile_App_dev.bc790047962f0a4b7cc055bd2c2dbd50.svg',
  '/static/media/Eficient-Resource-Management.21da62fb93c693cba563a5ef1ec4c98a.svg',
  '/static/media/Android_Mobile_App_dev.f51e1d1a028bfea46c9075812a0db373.svg',
  '/static/media/iOS_Mobile_App_dev.dfac47b61232480028aa723e608d1fef.svg',
  '/static/media/ems6.9d88ce3b9b779634539b.PNG',
  '/index.html',
  '/static/css/main.2b0f2780.css.map',
  '/static/js/main.5b505906.js.map',

    /*--------------------------------------------------------------------------------------------
                                    DON'T TOUCH THESE BELOW FILES !!!
    --------------------------------------------------------------------------------------------*/
    "/",
    "/favicon.ico",
    "/main-logo.png",
    "/manifest.json",
    "https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Ubuntu:wght@300&display=swap",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
    "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
];

this.addEventListener("install", (event) => {
    this.skipWaiting();

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
});