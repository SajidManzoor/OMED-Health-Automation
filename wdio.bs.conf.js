const path = require("path");
const  config  = require("./wdio.conf");

// ==================
// BrowserStack Credentials
// ==================
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;
// ==================
// Specify Test Files
// ==================
config.specs= ["./test/specs/android/*.js"]
// ============
// Capabilities
// ============
config.capabilities= [
  {
    'bstack:options': {
    deviceName: 'Samsung Galaxy S23 Ultra',
    osVersion: "13.0",
  },
  "appium:autoGrantPermissions": true,
}],

config.services = [
  [
    "browserstack",
    {
      testObservability: true,
      testObservabilityOptions: {
        projectName: "OMED Health Automation",
        buildName:
          "Smoke Tests",
      },
      browserstackLocal: true,
      app:"bs://acee5d9c3d0b7d2640df47c2a56746e3b0c5f9be"
    },
  ],

];

exports.config = config;
