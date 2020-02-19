// vim:ts=4:sw=4:expandtab
// © 2011 Michael Stapelberg

(function () {
    const oldVersions = document.querySelector('.old');
    const oldTrigger = document.querySelector('#showOldDownloads');
    const oldAmount = document.querySelector('#numberOfOldDownloads');

    // If the old versions tbody is found
    if (oldVersions) {

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
})();