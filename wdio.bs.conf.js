const path = require("path");
const config = require("./wdio.conf");

// ==================
// BrowserStack Credentials
// ==================
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;
// ==================
// Specify Test Files
// ==================
config.specs = ["./test/specs/android/*.js"];
config.mochaOpts = {
  ui: "bdd",
  timeout: 60000,
  bail: true,
};
// ============
// Capabilities
// ============
config.capabilities = [
  {
    "bstack:options": {
      deviceName: "Samsung Galaxy S23 Ultra",
      osVersion: "13.0",
    },
    "appium:autoGrantPermissions": true,
  },
];

config.services = [
  [
    "browserstack",
    {
      testObservability: true,
      testObservabilityOptions: {
        projectName: "OMED Health Automation",
        buildName: "Smoke Tests",
      },
      browserstackLocal: true,
      app: "bs://d9c87d48960149bdeee0f771db35be1aa3adfcf2",
    },
  ],
];

exports.config = config;
