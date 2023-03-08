const serviceWorker = () => {
    if ('serviceWorker' in navigator) {
        const swUrl = `${process.env.PUBLIC_URL}/sw.js`;
        navigator.serviceWorker.register(swUrl).then(response => {
            console.info("Service worker is registered for this site")
        });
    }
}

export default serviceWorker