const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          //launchOptions.args.push('--incognito');
        }

        if (browser.family === 'firefox') {

          launchOptions.args.push('-private');

        }

        return launchOptions;
      });
    },
  },
});
