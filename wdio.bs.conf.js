const path = require("path");
const { config } = require("./wdio.conf");

// ==================
// BrowserStack Credentials
// ==================
// config.user = 'owaisgondal_lN7FKJ';
// config.key = 'NwVY8j5s5KSrqiUkKwxs';
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;
// ==================
// Specify Test Files
// ==================
// ============
// Capabilities
// ============
config.capabilities = [
  {
    // capabilities for local Appium web tests on an Android Emulator
    platformName: "Android",
    "appium:automationName": "UiAutomator2",
    "appium:deviceName": "Samsung Galaxy S23 Ultra",
    // "appium:platformName":"13.0",
    // "appium:deviceName": "Pixel 8 Pro",
    // 'appium:appPackage': 'com.android.settings',
    // 'appium:appActivity': '.Settings',
    // 'appium:app': path.join(process.cwd(), './app/ApiDemos-debug.apk')
    // "appium:app": path.join(process.cwd(), "./app/ColorNote+Notepad.apk"),
    "appium:app": "bs://acee5d9c3d0b7d2640df47c2a56746e3b0c5f9be",
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
        buildName:
          "Smoke Tests",
      },
      browserstackLocal: true,
    },
  ],
];

exports.config = config;
