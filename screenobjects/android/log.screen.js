const Utils = require("../../utils");
const Food = require("./food.screen");
class Log {
  get foodAndDrinksBtn() {
    return driver.$('//*[@resource-id="foodAndDrinksButton"]');
  }
  get symptomsBtn() {
    return driver.$('//*[@resource-id="symptomsButton"]');
  }
  get lifestyleBtn() {
    return driver.$('//*[@resource-id="lifestyleButton"]');
  }
  /**
   * method to add food and drinks
   * @param {string} food
   * @param {string} drink
   */
  async addFoodAndDrinks(food, drink) {
    await this.foodAndDrinksBtn.click();
    await Utils.skipTour();
    await Food.foodInput.setValue(food);
    await Food.drinkInput.setValue(drink);
    await Food.saveBtn.click();
    await expect(
      driver.$('//*[@text="Food and Drink entry saved successfully"]')
    ).toBeDisplayed();
  }
}

module.exports = new Log();
