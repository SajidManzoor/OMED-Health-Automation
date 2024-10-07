const Utils = require("../../utils");
const Food = require("./food.screen");
const Symptoms = require("./symptoms.screen");
const Lifestyle = require("./lifestyle.screen");
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
  /**
   * Add symptoms entry
   * @param {string} bloating - Bloating level
   * @param {string} abdominalPain - Abdominal pain level
   * @param {string} nausea - Nausea level
   * @param {string} flatulence - Flatulence level
   * @param {string} stool - Stool type
   */
  async addSymptoms(bloating, abdominalPain, nausea, flatulence, stool) {
    await this.symptomsBtn.click();
    await Utils.skipTour();
    await Symptoms.setBloating(bloating);
    await Symptoms.setAbdominalPain(abdominalPain);
    await Symptoms.setNausea(nausea);
    await Symptoms.setFlatulence(flatulence);
    await Symptoms.setStool(stool);
    await Utils.backBtn.click();
    await Symptoms.verifySuccessMsg();
  }
  /**
   * Add lifestyle entry
   * @param {string} stress - Stress level
   * @param {string} sleep - Sleep quality
   * @param {string} exercise - Exercise level
   */
  async addLifestyle(stress, sleep, exercise) {
    await this.lifestyleBtn.click();
    await Utils.skipTour();
    await Lifestyle.setStress(stress);
    await Lifestyle.setSleep(sleep);
    await Lifestyle.setExercise(exercise);
    await Utils.backBtn.click();
  }
}

module.exports = new Log();
