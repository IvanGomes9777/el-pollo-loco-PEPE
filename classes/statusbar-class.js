/**
 * Represents a status bar in the game.
 * @extends DrawableObject
 */
class StatusBar extends DrawableObject {
  /**
   * Image element for the status bar.
   * @type {HTMLImageElement}
   */
  img;

  /**
   * Width of the status bar.
   * @type {number}
   */
  width = 180;

  /**
   * Height of the status bar.
   * @type {number}
   */
  height = 60;

  /**
   * Creates a new StatusBar instance.
   */
  constructor() {
    super();
  }

  /**
   * Resolves the index of the image to use based on the current percentage.
   * @returns {number} - The index of the image to use.
   */
  resolveImageIndex() {
    if (this.percentage >= 100) {
      return 5;
    } else if (this.percentage > 80) {
      return 4;
    } else if (this.percentage > 60) {
      return 3;
    } else if (this.percentage > 40) {
      return 2;
    } else if (this.percentage > 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
