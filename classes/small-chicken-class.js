/**
 * Represents a small chicken enemy in the game.
 * @extends moveableObject
 */
class SmallChicken extends moveableObject {
  /**
   * Width of the small chicken.
   * @type {number}
   */
  width = 65;

  /**
   * Height of the small chicken.
   * @type {number}
   */
  height = 65;

  /**
   * Y-coordinate of the small chicken.
   * @type {number}
   */
  y = 355;

  /**
   * Energy level of the small chicken.
   * @type {number}
   */
  energy = 1;

  /**
   * Cache of images used for animations.
   * @type {Object.<string, HTMLImageElement>}
   */
  imageCache = {};

  /**
   * Offset values for collision detection.
   * @type {Object}
   */
  offset = {
    right: 5,
    left: 5,
    top: 5,
    bottom: -100,
  };

  /**
   * Array of image paths for walking animations.
   * @type {string[]}
   */
  Walking_Images_Enemies = [
    'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
    'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
    'img/3_enemies_chicken/chicken_small/1_walk/3_w.png',
  ];

  /**
   * Array of image paths for dead animations.
   * @type {string[]}
   */
  Dead_Images_Enemies = [
    "img/3_enemies_chicken/chicken_small/2_dead/dead.png",
  ];

  /**
   * Creates a new SmallChicken instance.
   */
  constructor() {
    super().loadImage("img/3_enemies_chicken/chicken_small/1_walk/1_w.png");
    this.loadImages(this.Walking_Images_Enemies);
    this.loadImages(this.Dead_Images_Enemies);
    this.x = 370 + Math.random() * 4050;
    this.speed = 2.5 + Math.random() * 0.5;
    this.animate();
  }

  /**
   * Initiates the animation for the small chicken.
   */
  animate() {
    let animationInterval = setInterval(() => {
      if (this.isDead()) {
        this.chickenDeathInterval(animationInterval);
        setTimeout(() => {
          clearInterval(animationInterval);
        }, 100);
      }
      if (!this.isDead()) {
        this.chickenMoving();
      }
    }, 5500 / 60);
  }

  /**
   * Moves the small chicken.
   */
  chickenMoving() {
    this.moveLeft();
    this.playAnimation(this.Walking_Images_Enemies);
    this.otherDirection = false;
  }

  /**
   * Moves the dead small chicken down.
   */
  killedChickenToHell() {
    setInterval(() => {
      this.y++;
    }, 50);
  }

  /**
   * Initiates the death animation for the small chicken.
   */
  chickenDeathInterval() {
    this.playAnimation(this.Dead_Images_Enemies);
    this.killedChickenToHell();
    chicken_dead_sound.play();
  }
}
