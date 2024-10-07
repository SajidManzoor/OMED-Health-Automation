const LoginScreen = require("../../../screenobjects/android/login.screen");
const LogScreen = require("../../../screenobjects/android/log.screen");
const Account = require("../../../screenobjects/android/account.screen");
const Utils = require("../../../utils");

describe("Smoke Tests", () => {
  it("Login", async () => {
    await LoginScreen.login(
      process.env.EMAIL,
      process.env.PASSWORD,
      process.env.COUNTRY
    );
  });
  it("Add Food and Drinks", async () => {
    await Utils.skipTour();
    await Utils.addDataBtn.click();
    await Utils.skipTour();
    await LogScreen.addFoodAndDrinks("Pizza", "Coke");
  });
  it("Add Symptoms", async () => {
    await LogScreen.addSymptoms(50, 30, 40, 60, 50);
  });
  it("Add Lifestyle", async () => {
    await LogScreen.addLifestyle(70, 50, 90);
  });
  it("Update Name", async () => {
    await Utils.accountBtn.click();
    await Account.updateName("Sajid", "QA");
  });
});
