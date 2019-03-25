window.onload = () => {
    const allImages = document.getElementsByTagName('img');
    if (!allImages) {
        return;
    }
    
    for (let i = 0; i < allImages.length; i++) {
        const attr = allImages[i].getAttribute('data-src');
        if (!attr) {
            continue;
        }
        allImages[i].setAttribute('src', attr);
    }
};