class Utilities {
  get addDataBtn() {
    return driver.$(
      'android=new UiSelector().className("android.view.View").instance(3)'
    );
  }
  get accountBtn() {
    return driver.$(
      'android=new UiSelector().className("android.view.View").instance(5)'
    );
  }
  get skipBtn() {
    return driver.$("~Skip tour");
  }
  get backBtn() {
    return driver.$('//*[@resource-id="backButton"]');
  }
  async skipTour() {
    await this.skipBtn.click();
  }
  async moveSlider(locator, percentage) {
    var location = await locator.getLocation();
    var size = await locator.getSize();

    var startX = location.x;
    var endX = startX + size.width;
    var yAxis = location.y + size.height / 2;

    var moveToX = startX + ((endX - startX) * percentage) / 100;
    await driver.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", duration: 0, x: startX, y: yAxis },
          { type: "pointerDown", button: 0 },
          { type: "pause", duration: 100 },
          { type: "pointerMove", duration: 500, x: moveToX, y: yAxis },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);
  }
}
module.exports = new Utilities();
