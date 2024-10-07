const Utils = require("../../utils");
class Symptoms {
  get bloating() {
    return driver.$(
      'android=new UiSelector().className("android.view.ViewGroup").instance(27)'
    );
  }
  get abdominalPain() {
    return driver.$(
      'android=new UiSelector().className("android.view.ViewGroup").instance(32)'
    );
  }
  get nausea() {
    return driver.$(
      'android=new UiSelector().className("android.view.ViewGroup").instance(37)'
    );
  }
  get flatulence() {
    return driver.$(
      'android=new UiSelector().className("android.view.ViewGroup").instance(42)'
    );
  }
  get stool() {
    return driver.$(
      'android=new UiSelector().className("android.view.ViewGroup").instance(47)'
    );
  }

  get successMsg() {
    return driver.$('//*[@text="Symptoms entry saved successfully"]');
  }
  /**
   * @param {number} percentage
   */
  async setBloating(percentage) {
    await Utils.moveSlider(this.bloating, percentage);
  }
  /**
   * @param {number} percentage
   */
  async setAbdominalPain(percentage) {
    await Utils.moveSlider(this.abdominalPain, percentage);
  }
  /**
   * @param {number} percentage
   */
  async setNausea(percentage) {
    await Utils.moveSlider(this.nausea, percentage);
  }
  /**
   * @param {number} percentage
   */
  async setFlatulence(percentage) {
    await Utils.moveSlider(this.flatulence, percentage);
  }
  /**
   * @param {number} percentage
   */
  async setStool(percentage) {
    await Utils.moveSlider(this.stool, percentage);
  }
  async verifySuccessMsg() {
    await expect(this.successMsg).toBeDisplayed();
  }
}
module.exports = new Symptoms();
