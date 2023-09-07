/**
 * Represents the health bar for a character.
 * @extends StatusBar
 */
class HealthBar extends StatusBar {
  /**
   * Percentage of health remaining.
   * @type {number}
   */
  percentage = 100;

  /**
   * Camera position for the health bar.
   * @type {number}
   */
  camera = 0;

  /**
   * Image cache for health bar images.
   * @type {Object}
   */
  imageCache = {};

  /**
   * Array of images for the Health Bar.
   * @type {string[]}
   */
  HealthBar_Images = [
    "img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png",
  ];

  /**
   * Creates an instance of the HealthBar class.
   */
  constructor() {
    super();
    this.loadImages(this.HealthBar_Images);
    this.setPercentage(100);
    this.x = 5;
    this.y = 0;
  }

  /**
   * Sets the health percentage and updates the health bar image.
   * @param {number} percentage - The percentage of health remaining.
   */
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.HealthBar_Images[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }
}
