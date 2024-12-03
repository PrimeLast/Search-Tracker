// Function to populate the search queries in the side panel
function populateSearchQueries() {
    const searchQueriesList = document.getElementById('searchQueriesList');
    if (!searchQueriesList) return;  // Exit if the container is not found

    chrome.storage.local.get('searchQueries', (data) => {
        const searchQueries = data.searchQueries || []; // Get stored queries or default to empty array

        // Clear any existing queries in the list
        searchQueriesList.innerHTML = '';

        // If no queries are found, show a message
        if (searchQueries.length === 0) {
            let emptyMessage = searchQueriesList.querySelector('.empty-message');
            if (!emptyMessage) {
                emptyMessage = document.createElement('div');
                emptyMessage.classList.add('empty-message');
                searchQueriesList.appendChild(emptyMessage);
            }
            emptyMessage.textContent = 'No search queries found.';
        } else {
            // Remove the empty message if queries are present
            const emptyMessage = searchQueriesList.querySelector('.empty-message');
            if (emptyMessage) {
                emptyMessage.remove();
            }

            // Iterate over the queries and add them to the list
            searchQueries.forEach((query) => {
                const queryDiv = document.createElement('div');
                queryDiv.classList.add('query', 'magicText');
                queryDiv.textContent = query;
                searchQueriesList.appendChild(queryDiv);
            });
        }
    });
}

// Initial population of the list when the side panel is first loaded
populateSearchQueries();

// Listen for changes in storage and update the list dynamically
chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'local' && changes.searchQueries) {
        // If searchQueries change, repopulate the list
        populateSearchQueries();
    }
});

// Function to clear all search queries
function clearAllQueries() {
    // Send a message to background.js to clear all queries
    chrome.runtime.sendMessage({ action: 'clearQueries' }, (response) => {
        if (response && response.success) {
            // If successful, clear the displayed search queries
            populateSearchQueries();
        } else {
            console.error("Failed to clear queries.");
        }
    });
}

// Add event listener for the "Clear All Queries" button
const clearQueriesBtn = document.getElementById('clearQueriesBtn');
if (clearQueriesBtn) {
    clearQueriesBtn.addEventListener('click', clearAllQueries);
}
