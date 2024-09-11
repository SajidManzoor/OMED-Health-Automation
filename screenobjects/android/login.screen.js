class Login {
  get emailInput() {
    return driver.$('//*[@resource-id="Login-EmailInput"]');
  }
  get passwordInput() {
    return driver.$('//*[@resource-id="Login-PasswordInput"]');
  }
  get selectCountryDropdown() {
    return driver.$('//*[@text="Select Country"]');
  }
  get loginBtn() {
    return driver.$('//*[@resource-id="Login-LoginButton"]');
  }
  get finishBtn() {
    return driver.$("~Finish");
  }
  /**
   * method to login to the app
   * @param {string} email
   * @param {string} password
   * @param {string} country
   */
  async login(email, password, country) {
    await this.emailInput.setValue(email);
    await this.passwordInput.setValue(password);
    await this.selectCountryDropdown.click();
    await driver.$("~" + String(country)).click();
    await this.loginBtn.click();
    await driver.pause(10000);
    await this.finishBtn.click();
  }
}
module.exports = new Login();
