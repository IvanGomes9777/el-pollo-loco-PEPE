/**
 * Represents a chicken enemy in the game.
 * @extends moveableObject
 */
class Chicken extends moveableObject {
  width = 70;
  height = 70;
  y = 350;
  energy = 1;
  imageCache = {};
  offset = {
    right: 5,
    left: 5,
    top: 5,
    bottom: -100,
  };

  /**
   * Array of images for chicken's walking state.
   * @type {string[]}
   */

  Walking_Images_Enemies = [
    "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

   /**
   * Array of images for chicken's dead state.
   * @type {string[]}
   */
  Dead_Images_Enemies = [
    "img/3_enemies_chicken/chicken_normal/2_dead/dead.png",
  ];

  /**
   * Creates a new chicken enemy object and initializes its animations.
   */
  constructor() {
    super().loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.loadImages(this.Walking_Images_Enemies);
    this.loadImages(this.Dead_Images_Enemies);
    this.x = 350 + Math.random() * 4250;
    this.speed = 4.5 + Math.random() * 0.7;
    this.animate();
  }

  /**
 * Initiates the animation loop for the chicken.
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
 * Moves the chicken to the left and plays walking animation.
 */
  chickenMoving() {
    this.moveLeft();
    this.playAnimation(this.Walking_Images_Enemies);
    this.otherDirection = false;
  }

  /**
 * Animates the chicken's movement after death.
 */
  killedChickenToHell() {
    setInterval(() => {
      this.y++;
    }, 50);
  }

  /**
 * Handles the interval for chicken death animation.
 */
  chickenDeathInterval() {
    this.playAnimation(this.Dead_Images_Enemies);
    this.killedChickenToHell();
    chicken_dead_sound.play();
  }

}
