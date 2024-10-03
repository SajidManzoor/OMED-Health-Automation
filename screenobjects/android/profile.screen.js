class Profile {
  get firstName() {
    return driver.$('//*[@resource-id="firstName"]');
  }
  get lastName() {
    return driver.$('//*[@resource-id="lastName"]');
  }
  get saveButton() {
    return driver.$('//*[@resource-id="savesButton"]');
  }
  get successMsg() {
    return driver.$('//*[@text="The form was saved successfully"]');
  }
  async verifySuccessMsg() {
    await expect(this.successMsg).toBeDisplayed();
  }
}
module.exports = new Profile();
