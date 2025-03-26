class WaitUtil {
  /**
   * Waits for an element to be displayed with a default timeout.
   * @param {WebdriverIO.Element} element - The element to wait for.
   * @param {number} [timeout=20000] - The timeout in milliseconds (default: 20 seconds).
   * @param {string} [timeoutMsg] - Custom message for timeout error
   * @returns {Promise<boolean>} - True if the element is displayed within the timeout, false otherwise.
   * @throws {Error} - Throws an error if the element is not displayed within the timeout.
   */
  async waitForElementToBeDisplayed(
    element,
    timeout = 20000,
    timeoutMsg = "Element not displayed within the timeout"
  ) {
    try {
      await element.waitForDisplayed({
        timeout: timeout,
        timeoutMsg: timeoutMsg,
      });
      return true;
    } catch (error) {
      console.error(`Error waiting for element: ${error.message}`);
      throw error;
    }
  }
}

module.exports = new WaitUtil();
