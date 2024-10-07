const Utils = require("../../utils");
class Lifestyle {
  get stress() {
    return driver.$(
      'android=new UiSelector().className("android.view.ViewGroup").instance(27)'
    );
  }
  get sleep() {
    return driver.$(
      'android=new UiSelector().className("android.view.ViewGroup").instance(32)'
    );
  }
  get exercise() {
    return driver.$(
      'android=new UiSelector().className("android.view.ViewGroup").instance(37)'
    );
  }
  get successMsg() {
    return driver.$('//*[@text="Symptoms entry saved successfully"]');
  }
  /**
   * @param {number} percentage 
   */
  async setStress(percentage) {
    await Utils.moveSlider(this.stress, percentage);
  }
  /**
   * @param {number} percentage 
   */
  async setSleep(percentage) {
    await Utils.moveSlider(this.sleep, percentage);
  }
  /**
   * @param {number} percentage 
   */
  async setExercise(percentage) {
    await Utils.moveSlider(this.exercise, percentage);
  }
  async verifySuccessMsg() {
    await expect(this.successMsg).toBeDisplayed();
  }
}
module.exports = new Lifestyle();
