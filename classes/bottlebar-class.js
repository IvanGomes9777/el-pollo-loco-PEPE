/**
 * Represents a bottle status bar in the game.
 * @extends StatusBar
 */
class BottleBar extends StatusBar {
  x = 5;
  y = 100;
  imageCache = {};
  percentage = 0;

  /**
   * Array of image paths for the bottle status bar.
   * @type {string[]}
   */
  BottleBar_Images = [
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png",
  ];

  /**
   * Creates a new bottle status bar and sets the percentage to 0.
   */
  constructor() {
    super().loadImage(
      "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png"
    );
    this.loadImages(this.BottleBar_Images);
    this.setPercentage(0);
  }

  /**
   * Sets the percentage value of the bottle status bar and updates its image accordingly.
   * @param {number} percentage - The new percentage value to set.
   */
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.BottleBar_Images[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }
}
