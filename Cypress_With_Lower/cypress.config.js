const { defineConfig } = require("cypress");
const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin');

module.exports = defineConfig({
  // Configure the folder where actual screenshots are stored
  screenshotsFolder: './cypress/snapshots/actual',

  // Remove assets before each test run to avoid clutter
  trashAssetsBeforeRuns: true,

  // Enable video recording for your Cypress tests
  video: true,

  // Capture the full page when taking screenshots
  capture: 'fullPage',

  // Custom configuration for visual regression testing
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
      getCompareSnapshotsPlugin(on, config);
    }
  },
  
  // Environment variables for visual regression testing
  env: {
    // Always generate diff images for review
    "ALWAYS_GENERATE_DIFF": true,

    // Allow the test to pass even if there are visual regression differences
    "ALLOW_VISUAL_REGRESSION_TO_FAIL": false
  }
});
