// Lazy Loading Example for Images

// Select all images with the 'data-src' attribute
const lazyImages = document.querySelectorAll('img[data-src]');

// Function to load an image
function loadImage(image) {
    const src = image.getAttribute('data-src');
    if (!src) return;

    // Replace the placeholder src with the actual src
    image.src = src;
    image.removeAttribute('data-src');
}

// Intersection Observer for Lazy Loading
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry.target);
                observer.unobserve(entry.target); // Stop observing once loaded
            }
        });
    });

    lazyImages.forEach(image => {
        imageObserver.observe(image);
    });
} else {
    // Fallback for older browsers without Intersection Observer
    lazyImages.forEach(loadImage);
}

// Lazy Load Other Assets (e.g., iframe)
const lazyIframes = document.querySelectorAll('iframe[data-src]');
lazyIframes.forEach(iframe => {
    iframe.addEventListener('load', () => {
        iframe.setAttribute('src', iframe.getAttribute('data-src'));
        iframe.removeAttribute('data-src');
    });
});
