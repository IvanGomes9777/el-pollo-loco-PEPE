/**
 * Represents the health bar for the Endboss character.
 * @extends StatusBar
 */
class EndbossHealthbar extends StatusBar {
  /**
   * Y-coordinate of the health bar.
   * @type {number}
   */
  y = 0;

  /**
   * X-coordinate of the health bar.
   * @type {number}
   */
  x = 530;

  /**
   * Percentage of health remaining.
   * @type {number}
   */
  percentage = 100;

  /**
   * Image cache for health bar images.
   * @type {Object}
   */
  imageCache = {};

  /**
   * Array of images for the Endboss health bar.
   * @type {string[]}
   */
  Endboss_Health_Bar_Images = [
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png",
    "img/7_statusbars/2_statusbar_endboss/green.png",
  ];

  /**
   * Creates an instance of the EndbossHealthbar class.
   */
  constructor() {
    super().loadImage("img/7_statusbars/2_statusbar_endboss/green.png");
    this.loadImages(this.Endboss_Health_Bar_Images);
    this.setPercentage(100);
  }

  /**
   * Sets the health percentage and updates the health bar image.
   * @param {number} percentage - The percentage of health remaining.
   */
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.Endboss_Health_Bar_Images[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }
}
