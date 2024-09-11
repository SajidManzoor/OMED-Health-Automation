class Food {
  get foodInput() {
    return driver.$('//*[@resource-id="foodInput"]');
  }
  get drinkInput() {
    return driver.$('//*[@resource-id="drinkInput"]');
  }
  get saveBtn() {
    return driver.$("~Save");
  }
}
module.exports = new Food();
