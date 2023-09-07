/**
 * Represents a moveable object in the game.
 * @extends DrawableObject
 */
class moveableObject extends DrawableObject {
  /**
   * X-coordinate of the object.
   * @type {number}
   */
  x;

  /**
   * Y-coordinate of the object.
   * @type {number}
   */
  y;

  /**
   * Reference to the level.
   * @type {Level}
   */
  level;

  /**
   * Reference to the game world.
   * @type {World}
   */
  world;

  /**
   * Reference to the end boss character.
   * @type {Endboss}
   */
  endboss;

  /**
   * Reference to the player character.
   * @type {Character}
   */
  character;

  /**
   * Energy level of the object.
   * @type {number}
   */
  energy = 100;

  /**
   * Speed of the object.
   * @type {number}
   */
  speed = 10;

  /**
   * Vertical speed of the object.
   * @type {number}
   */
  speedY;

  /**
   * Horizontal speed of the object.
   * @type {number}
   */
  speedX;

  /**
   * Acceleration of the object.
   * @type {number}
   */
  acceleration = 2.0;

  /**
   * Flag to indicate if the object is facing the other direction.
   * @type {boolean}
   */
  otherDirection = false;

  /**
   * Timestamp of the last hit taken by the object.
   * @type {number}
   */
  lastHit = 0;

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
    right: 10,
    left: 10,
    top: 10,
    bottom: 10,
  };

  /**
   * Plays an animation using a sequence of images.
   * @param {string[]} images - An array of image paths.
   */
  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  /**
   * Initiates a jump action for the object.
   */
  jump() {
    this.speedY = 35;
  }

  /**
   * Moves the object to the left.
   */
  moveLeft() {
    this.x -= this.speed;
  }

  /**
   * Moves the object to the right.
   */
  moveRight() {
    this.x += this.speed;
  }

  /**
   * Applies gravity to the object.
   */
  applyGravity() {
    setInterval(() => {
      if (this instanceof Character && this.y > 180) {
        this.y = 180;
      }
      if (this.isAboveGround() || this.speedY > 0) this.y -= this.speedY;
      this.speedY -= this.acceleration;
    }, 1000 / 60);
  }

  /**
   * Checks if the object is above the ground.
   * @returns {boolean} True if above the ground, otherwise false.
   */
  isAboveGround() {
    if (this instanceof ThrowableObject) {
      return true;
    } else {
      return this.y < 180;
    }
  }

  /**
   * Checks if the object is colliding with another moveable object.
   * @param {moveableObject} mo - The other moveable object to check for collision.
   * @returns {boolean} True if colliding, otherwise false.
   */
  isColliding(mo) {
    return (
      this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
      this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
      this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
      this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
    );
  }

  /**
   * Initiates a throw action for the object.
   */
  throw() {
    this.applyGravity();
    setInterval(() => {
      this.x += 7.5;
    }, 25);
  }

  /**
   * Reduces the energy of the object after getting hit.
   */
  hit() {
    this.energy -= 1;
    if (this.energy <= 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  /**
   * Reduces the energy of the object after getting hit by the end boss.
   */
  hitEndboss() {
    this.energy -= 3;
    if (this.energy <= 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  /**
   * Checks if the object is currently hurt based on the time elapsed since the last hit.
   * @returns {boolean} True if hurt, otherwise false.
   */
  isHurt() {
    let time_passed = new Date().getTime() - this.lastHit;
    time_passed = time_passed / 1000;
    return time_passed < 0.6;
  }

  /**
   * Checks if the object is dead (energy is zero).
   * @returns {boolean} True if dead, otherwise false.
   */
  isDead() {
    return this.energy == 0;
  }

  /**
   * Clears all intervals.
   */
  clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
  }
}
