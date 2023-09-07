/**
 * Represents a cloud object in the game.
 * @extends moveableObject
 */
class Cloud extends moveableObject {
  /**
   * Width of the cloud.
   * @type {number}
   */
  width = 600;

  /**
   * Height of the cloud.
   * @type {number}
   */
  height = 350;

  /**
   * Cache for cloud's images.
   * @type {Object}
   */
  imageCache = {};

  /**
   * Array of cloud images.
   * @type {Array}
   */
  Cloud_Images = [
    "img/5_background/layers/4_clouds/1.png",
    "img/5_background/layers/4_clouds/2.png",
  ];

  /**
   * Creates a cloud object.
   */
  constructor() {
    super().loadImage("img/5_background/layers/4_clouds/1.png");
    this.loadImages(this.Cloud_Images);
    this.y = 35;
    this.x = 5 + Math.random() * 3800;
    this.animate();
  }

  /**
   * Animates the cloud by moving it to the left.
   */
  animate() {
    this.moveLeft();
  }
}
