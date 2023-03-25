const app = "TeraTech";
const urlsToPrefetch = [

    '/static/css/main.5b8f271e.css',
  '/static/js/main.70bc8980.js',
  '/static/media/ems3.0d280f248b30a22e8da6.PNG',
  '/static/media/image1.bbef3cf4349ad6bb3db5.jpg',
  '/static/media/Main_image.6db544cbf03454aa4dfb.jpg',
  '/static/media/main-logo2.dc8b69a2ada602675eb6.png',
  '/static/media/image3.2cdb8bd757766fb9076d.png',
  '/static/media/webdevelopment.52e5056a7709a1dcaad9.jpg',
  '/static/media/3.e836b6db9d420ec808bd.png',
  '/static/media/ems5.283d5b18ce1f5280be9b.PNG',
  '/static/media/ems4.6b8e93906a5c96421b42.PNG',
  '/static/media/5.bdf820b372a5c68b468b.png',
  '/static/media/bootstrap-icons.6959d0d983ee318f8880.woff',
  '/static/media/1.38cb532db017649f08ce.png',
  '/static/media/4.044e22fc8de89f4dabc6.png',
  '/static/media/6.1f31138e9827ea7d6a37.png',
  '/static/media/GCP.96ac8bac7e06fd62f888.png',
  '/static/media/bootstrap-icons.b2e5aab643c6f0fd2da6.woff2',
  '/static/media/AWS.5faee6c36f18b9996b6b.png',
  '/static/media/Azure.31fc8d9dce9130a90303.png',
  '/static/media/ems2.dc369dd123142a5ff25e.PNG',
  '/static/media/MobileAppDevelopment.2c408b3a4f03d3aa3dea.jpg',
  '/static/media/contactUS.e95de7a904ab7284db7a.jpg',
  '/static/media/cloudcomputing.80116460c899c45423c9.jpg',
  '/static/media/1.ef41481ed6b5423b9400.webp',
  '/static/media/2.a539ce7d49aa44639688.webp',
  '/static/media/Devops.18005bf9ddab27f7a4d4.png',
  '/static/media/ems1.96b1a0a4f6b824c59389.PNG',
  '/static/media/2.d288ee02eb5c7e399b11.png',
  '/static/media/3.6cbd97257b16b528ac6e.webp',
  '/static/media/main-logo.b6ef80a98861a499dca7.png',
  '/static/media/Visual_Design.a73037e54c9e1e182fbd8a1fc69011e3.svg',
  '/static/media/SQL_Server.25bfdcadd50b9710100e.png',
  '/static/media/Scalable_Products.d069ef340136611861f7c83499829dfd.svg',
  '/static/media/Cross-Platform_Mobile_App_dev.bc790047962f0a4b7cc055bd2c2dbd50.svg',
  '/static/media/Eficient-Resource-Management.21da62fb93c693cba563a5ef1ec4c98a.svg',
  '/static/media/Android_Mobile_App_dev.f51e1d1a028bfea46c9075812a0db373.svg',
  '/static/media/iOS_Mobile_App_dev.dfac47b61232480028aa723e608d1fef.svg',
  '/static/media/ems6.9d88ce3b9b779634539b.PNG',
  '/index.html',
  '/static/css/main.5b8f271e.css.map',
  '/static/js/main.70bc8980.js.map',

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