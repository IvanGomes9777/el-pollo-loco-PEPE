/**
 * Represents a background object in the game.
 * @extends moveableObject
 */
class BackgroundObject extends moveableObject {
  width = 720;
  height = 480;
  x = 0;
  y = 0;
  imageCache = {};

  /**
   * Creates a new background object.
   * @param {string} imagePath - The path to the image for the background object.
   * @param {number} x - The initial x-coordinate of the background object.
   */
  constructor(imagePath, x) {
    super().loadImage(imagePath);
    this.x = x;
  }
}
