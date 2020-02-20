/*
 * The Photoswipe gallery for the screenshot page
 */
function initGallery(screens) {
    const pswpElement = document.querySelector('.pswp');

    var options = {
        index: 0 // start at first slide
    };
    console.log(screens);
    // Initializes and opens PhotoSwipe
    const gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, screens, options);
    gallery.init();
}

/*
 * The "show more" toggle for the downloads table
 */
function initDownloads(oldVersions) {
    const oldTrigger = document.querySelector('#showOldDownloads');
    const oldAmount = document.querySelector('#numberOfOldDownloads');

    // Display the number of old versions
    oldAmount.innerHTML = oldVersions.children.length;

    oldTrigger.addEventListener('click', (event) => {

        // Stop the link from redirecting
        event.preventDefault();

        // Show the second tbody, the one with the old versions
        oldVersions.style.display = 'table-row-group';

        // Hide the expand link
        oldTrigger.style.display = 'none';
    });
}

/*
 * Our init function
 */
(function () {

    // If screens are present, init the gallery
    const screens = document.querySelectorAll('.screen');
    screens.forEach((image) => {
        image.addEventListener('click', () => {
            initGallery(screens);
        });
    });

    // If the tbody with old versions is in the DOM, init the JS toggle
    const oldVersions = document.querySelector('.old');
    if (oldVersions) {
        initDownloads(oldVersions)
    }

})();