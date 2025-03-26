const Profile = require("../../screenobjects/android/profile.screen");
class Account {
  get myProfileButton() {
    return driver.$('//*[@resource-id="myProfileButton"]');
  }
  /**
   * @param {string} firstName
   * @param {string} lastName
   */
  async updateName(firstName, lastName) {
    await this.myProfileButton.click();
    await Profile.firstName.setValue(firstName);
    await Profile.lastName.setValue(lastName);
    await Profile.saveButton.click();
    await Profile.verifySuccessMsg();
  }
}
module.exports = new Account();
