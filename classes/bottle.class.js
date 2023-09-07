class Bottle extends DrawableObject {
  width = 75;
  height = 65;
  imageCache = {};
  offset = {
    left: 10,
    right: 10,
    top: 10,
    bottom: 10,
  };

  /**
   * Array of image paths for the bottle object.
   * @type {string[]}
   */

  Bottle_Images = ["img/6_salsa_bottle/salsa_bottle.png"];

  /**
   * Creates a new bottle object with a random position.
   */
  constructor() {
    super();
    this.loadImage(this.Bottle_Images);
    this.x = 200 + Math.random() * 3900;
    this.y = 120 + Math.random() * 250;
  }
}
