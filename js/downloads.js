// vim:ts=4:sw=4:expandtab
// © 2011 Michael Stapelberg

function initDownloads() {
    const oldVersions = document.querySelector('.old');
    const oldTrigger = document.querySelector('#showOldDownloads');
    const oldAmount = document.querySelector('#numberOfOldDownloads');

    // Display the number of old versions
    oldAmount.innerHTML = oldVersions.children.length;

    oldTrigger.addEventListener('click', (event) => {

        // Stop the link from redirecting
        event.preventDefault();

        // Show the second tbody, the one with the old verions
        oldVersions.style.display = 'table-row-group';

        // Hide the expand link
        oldTrigger.style.display = 'none';
    });
}
