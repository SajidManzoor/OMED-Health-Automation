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
  timeout: process.env.MOCHA_TIMEOUT,
  bail: true,
};
// ============
// Capabilities
// ============
config.capabilities = [
  {
    "bstack:options": {
      deviceName: "Google Pixel 9 Pro XL",
      osVersion: "15.0",
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
      app: process.env.BROWSERSTACK_APP,
    },
  ],
];

exports.config = config;
