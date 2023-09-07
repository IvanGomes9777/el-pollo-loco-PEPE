/**
 * Represents a drawable object in the game.
 */
class DrawableObject {
  /**
   * Y-coordinate of the drawable object.
   * @type {number}
   */
  y;

  /**
   * X-coordinate of the drawable object.
   * @type {number}
   */
  x;

  /**
   * Width of the drawable object.
   * @type {number}
   * @default 250
   */
  width = 250;

  /**
   * Height of the drawable object.
   * @type {number}
   * @default 200
   */
  height = 200;

  /**
   * Image element representing the drawable object.
   * @type {HTMLImageElement}
   */
  img;

  /**
   * Current image index for animation purposes.
   * @type {number}
   * @default 0
   */
  currentImage = 0;

  /**
   * Cache for loaded images.
   * @type {object}
   */
  imageCache = {};

  /**
   * Draws the drawable object on the canvas.
   * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas.
   */
  draw(ctx) {
    try {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    } catch (e) {}
  }

  /**
   * Loads an image from the given path and sets it as the object's image.
   * @param {string} path - The path to the image.
   */
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   * Loads an array of images from the given paths and caches them.
   * @param {string[]} arr - An array of image paths.
   */
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  /**
   * Sets the percentage value of the drawable object and updates the displayed image.
   * @param {number} percentage - The percentage value to set.
   */
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.CoinBar_Images[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }
}
