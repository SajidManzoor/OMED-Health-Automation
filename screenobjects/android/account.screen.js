const Profile = require("../../screenobjects/android/profile.screen");
class Account {
  get myProfileButton() {
    return driver.$('//*[@resource-id="myProfileButton"]');
  }
  async updateName(firstName, lastName) {
    await this.myProfileButton.click();
    await Profile.firstName.setValue(firstName);
    await Profile.lastName.setValue(lastName);
  }
}
module.exports = new Account();
