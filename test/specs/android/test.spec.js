const LoginScreen = require("../../../screenobjects/android/login.screen");
const LogScreen = require("../../../screenobjects/android/log.screen");
const Account = require("../../../screenobjects/android/account.screen");
const Utils = require("../../../utils/utils");

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
    await LogScreen.addFoodAndDrinks(process.env.FOOD, process.env.DRINK);
  });
  it("Add Symptoms", async () => {
    await LogScreen.addSymptoms(
      process.env.BLOATING,
      process.env.ABDOMINAL_PAIN,
      process.env.NAUSEA,
      process.env.FLATULENCE,
      process.env.STOOL
    );
  });
  it("Add Lifestyle", async () => {
    await LogScreen.addLifestyle(
      process.env.STRESS,
      process.env.SLEEP,
      process.env.EXERCISE
    );
  });
  it("Update Name", async () => {
    await Utils.accountBtn.click();
    await Account.updateName(process.env.FIRST_NAME, process.env.LAST_NAME);
  });
});
