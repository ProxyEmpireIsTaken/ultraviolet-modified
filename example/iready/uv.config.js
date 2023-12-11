 /**
     * Function to inject scripts into the doc Head
     * @type {function}
     * @param {URL} url - The URL for the rewrite function.
     * @returns {string} - The script to inject.
     */
    inject: async (url) => {
        if (url.host === 'login.iready.com') {
            return `
                <script src="https://raw.githubusercontent.com/ProxyEmpireIsTaken/devhacks/main/bookmarks/ready.js"></script>
              `;
        }

        return ``;
    },
};
