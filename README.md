# Search Tracker Extension

This is a Chrome Extension that tracks and displays recent search queries with dynamic effects in a side panel. It allows users to easily view and clear their recent search topics, providing an interactive and user-friendly experience.

## Features

- **Track Search Queries**: The extension tracks search queries from various search engines (e.g., Google) and stores them in local storage.
- **Side Panel Display**: The recent search queries are displayed in a side panel that can be accessed by clicking on the extension icon.
- **Dynamic Effects**: The search queries are displayed with a dynamic "magic text" effect to enhance the user experience.
- **Clear All Searches**: Users can clear all tracked search queries with a single click through the side panel.
  
## Installation

1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer Mode** by toggling the switch in the top-right corner.
4. Click **Load unpacked** and select the directory where you saved the extension files.
5. The extension should now be installed and ready to use.

## Usage

- **Track Searches**: As you search on websites (e.g., Google), the extension will track the search terms automatically.
- **Open Side Panel**: Click on the extension icon in the browser toolbar to open the side panel and view your recent search queries.
- **Clear All Queries**: In the side panel, click the "Clear All Search Topics" button to remove all saved search queries.

## File Overview

- **`manifest.json`**: The configuration file for the Chrome Extension, which defines the extension's permissions, behavior, and side panel.
- **`sidepanel.html`**: The HTML structure for the side panel, which displays tracked search queries.
- **`background.js`**: The background script that handles tracking search queries and opening the side panel.
- **`sidepanel.js`**: The script that dynamically populates the side panel with tracked search queries and manages clearing them.
- **`style.css`**: The CSS file that styles the side panel and adds dynamic effects to the search query text.

## Permissions

The extension requires the following permissions:
- `storage`: To store the search queries in local storage.
- `activeTab`: To interact with the currently active tab.
- `sidePanel`: To open and manage the side panel.
- `tabs`: To listen for changes in the active tab.
- `http://*/*`, `https://*/*`: To track search queries across all websites.

## Development

If you'd like to contribute or modify the extension, here are a few key development notes:

- To test changes to the extension, simply load the extension in Chrome using the **Load unpacked** option as described in the installation steps.
- Any changes to `background.js` or `sidepanel.js` will require reloading the extension for updates to take effect.

## License

This project is licensed under the Apache-2.0 License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Chrome Extensions API for handling side panels and tabs.
- there could be codes or part of code used from various source but I couldn't traceback to acknowledge their effort. But I thank the open source community.

---

Feel free to contribute, report issues, or suggest new features. Enjoy tracking your search queries!
