const LoginScreen = require("../../../screenobjects/android/login.screen");
const LogScreen = require("../../../screenobjects/android/log.screen");
const Symptoms = require("../../../screenobjects/android/symptoms.screen");
const Lifestyle = require("../../../screenobjects/android/lifestyle.screen");
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
    await LogScreen.symptomsBtn.click();
    await Utils.skipTour();
    await Symptoms.setBloating(50);
    await Symptoms.setAbdominalPain(30);
    await Symptoms.setNausea(40);
    await Symptoms.setFlautulence(60);
    await Symptoms.setStool(50);
    await Utils.backBtn.click();
    await Symptoms.verifySuccessMsg();
  });
  it("Add Lifestyle", async () => {
    await LogScreen.lifestyleBtn.click();
    await Utils.skipTour();
    await Lifestyle.setStress(70);
    await Lifestyle.setSleep(50);
    await Lifestyle.setExercise(90);
  });
  it("Update Name", async () => {
    await Utils.accountBtn.click();
    await Account.updateName("Sajid", "QA");
  });
});
