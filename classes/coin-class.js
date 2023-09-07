/**
 * Represents a coin object in the game.
 * @extends moveableObject
 */
class Coin extends moveableObject {
  /**
   * Width of the coin.
   * @type {number}
   */
  width = 105;

  /**
   * Height of the coin.
   * @type {number}
   */
  height = 105;

  /**
   * Cache for coin's images.
   * @type {Object}
   */
  imageCache = {};

  /**
   * Offset for collision detection.
   * @type {Object}
   */
  offset = {
    left: 10,
    right: 10,
    top: 10,
    bottom: 10,
  };

  /**
   * Array of coin images.
   * @type {Array}
   */
  Images_Coin = ["img/8_coin/coin_1.png", "img/8_coin/coin_2.png"];

  /**
   * Creates a coin object.
   */
  constructor() {
    super().loadImage("img/8_coin/coin_1.png");
    this.loadImages(this.Images_Coin);
    this.x = 200 + Math.random() * 4200;
    this.y = 280 - Math.random() * 200;
    this.animate();
  }

  /**
   * Plays animation using the provided images array.
   * @param {Array} images - Array of image paths for animation.
   */
  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  /**
   * Animates the coin by playing its animation.
   */
  animate() {
    setInterval(() => {
      this.playAnimation(this.Images_Coin);
    }, 10000/60);
  }
}
