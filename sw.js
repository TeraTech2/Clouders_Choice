const app = "TeraTech";
const urlsToPrefetch = [
    // images & pages
    "/",
    "/About",
    "/Webdevelopment",
    "/Contact",
    "/MobileAppDevelopment",
    "/MicrosoftAzure",
    "/AmazonWebServices",
    "/GoogleCloudPlatform",
    "/Consulting",
    "/Training",
    "/Datascience",
    "/Python",
    "/ML",
    "/Web",
    "/Office365",

    "/favicon.ico",
    "static/media/cloudcomputing.80116460c899c45423c9.jpg",
    "static/media/MobileAppDevelopment.2c408b3a4f03d3aa3dea.jpg",
    "static/media/webdevelopment.52e5056a7709a1dcaad9.jpg",
    "static/media/Main_image.6db544cbf03454aa4dfb.jpg",
    "static/media/Eficient-Resource-Management.21da62fb93c693cba563a5ef1ec4c98a.svg",
    "static/media/Scalable_Products.d069ef340136611861f7c83499829dfd.svg",
    "static/media/Visual_Design.a73037e54c9e1e182fbd8a1fc69011e3.svg",
    "static/media/Cross-Platform_Mobile_App_dev.bc790047962f0a4b7cc055bd2c2dbd50.svg",
    "static/media/iOS_Mobile_App_dev.dfac47b61232480028aa723e608d1fef.svg",
    "static/media/Android_Mobile_App_dev.f51e1d1a028bfea46c9075812a0db373.svg",
    "static/media/Azure.31fc8d9dce9130a90303.png",
    "static/media/AWS.5faee6c36f18b9996b6b.png",
    "static/media/GCP.96ac8bac7e06fd62f888.png",
    "static/media/1.ef41481ed6b5423b9400.webp",
    "static/media/2.a539ce7d49aa44639688.webp",
    "static/media/3.6cbd97257b16b528ac6e.webp",
    "static/media/image3.2cdb8bd757766fb9076d.png",
    "static/media/contactUS.e95de7a904ab7284db7a.jpg",

    "static/media/image1.bbef3cf4349ad6bb3db5.jpg",
    "static/media/main-logo.f09f957e16d50c0b14ed.png",
    "static/media/Devops.18005bf9ddab27f7a4d4.png",
    "static/media/SQL_Server.25bfdcadd50b9710100e.png",

    // js
    "static/js/bundle.js",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
    "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js",

    // fonts & icons & css
    "https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Ubuntu:wght@300&display=swap",
    "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDz8Z1xlFQ.woff2",
    "/static/media/bootstrap-icons.b2e5aab643c6f0fd2da6.woff2",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
];

this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(app)
            .then(cache => {
                cache.addAll(urlsToPrefetch);
            })
    )
});

this.addEventListener("fetch", (event) => {
    if(!navigator.onLine){
        event.respondWith(caches.match(event.request)).then(res => {
            if (res) {
                return res
            }
        })
    }
})