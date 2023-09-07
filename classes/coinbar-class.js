/**
 * Represents a coin status bar in the game.
 * @extends StatusBar
 */
class Coinbar extends StatusBar {
  /**
   * X-coordinate of the coin status bar.
   * @type {number}
   */
  x = 5;

  /**
   * Y-coordinate of the coin status bar.
   * @type {number}
   */
  y = 50;

  /**
   * Current percentage value of the coin status bar.
   * @type {number}
   */
  percentage = 0;

  /**
   * Cache for loaded coin status bar images.
   * @type {object}
   */
  imageCache = {};

  /**
   * Array of image paths for the coin status bar.
   * @type {string[]}
   */
  CoinBar_Images = [
    "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png",
  ];

  /**
   * Creates an instance of Coinbar.
   */
  constructor() {
    super();
    this.loadImages(this.CoinBar_Images);
    this.setPercentage(0);
  }

  /**
   * Sets the percentage value of the coin status bar and updates the displayed image.
   * @param {number} percentage - The percentage value to set (0-100).
   */
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.CoinBar_Images[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }
}
