/**
 * Represents a throwable object in the game, such as a bottle.
 * @extends moveableObject
 */
class ThrowableObject extends moveableObject {
  /**
   * X-coordinate of the throwable object.
   * @type {number}
   */
  x;

  /**
   * Y-coordinate of the throwable object.
   * @type {number}
   */
  y;

  /**
   * Width of the throwable object.
   * @type {number}
   */
  width = 75;

  /**
   * Height of the throwable object.
   * @type {number}
   */
  height = 65;

  /**
   * Vertical speed of the throwable object.
   * @type {number}
   */
  speedY = 30;

  /**
   * Indicates whether the bottle is broken.
   * @type {boolean}
   */
  bottleIsBroken = false;

  /**
   * Indicates the direction of the throwable object.
   * @type {boolean}
   */
  otherDirection = false;

  /**
   * Images for bottle rotation animation.
   * @type {string[]}
   */
  Bottle_Rotation_Images = [
    "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
  ];

  /**
   * Images for bottle splash animation.
   * @type {string[]}
   */
  Bottle_Splash_Images = [
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png",
  ];

  /**
   * Creates a new ThrowableObject instance.
   * @param {number} x - The initial X-coordinate of the throwable object.
   * @param {number} y - The initial Y-coordinate of the throwable object.
   */
  constructor(x, y) {
    super();
    this.loadImages(this.Bottle_Rotation_Images);
    this.loadImages(this.Bottle_Splash_Images);
    this.throw();
    this.x = x;
    this.y = y;
  }

  /**
   * Throws the throwable object.
   */
  throw() {
    this.animateBottle();
    this.applyGravity();
    this.throwBottleLeft = world.character.otherDirection;
    setInterval(() => {
      if (this.throwBottleLeft) {
        this.x -= 23;
      } else {
        this.x += 23;
      }
    }, 35);
  }

  /**
   * Animates the throwable object.
   */
  animateBottle() {
    this.bottleInterval = setInterval(() => {
      if (this.y < 345) {
        this.bottleRotation();
      } else {
        this.bottleSplashing();
        setTimeout(() => {
          clearInterval(this.bottleInterval);
        }, 500);
      }
    }, 1000 / 20);
  }

  /**
   * Animates bottle rotation.
   */
  bottleRotation() {
    this.playAnimation(this.Bottle_Rotation_Images);
  }

  /**
   * Animates bottle splashing.
   */
  bottleSplashing() {
    bottle_splash_sound.pause();
    this.bottleIsBroken = true;
    this.playAnimation(this.Bottle_Splash_Images);
    bottle_splash_sound.play();
  }

  /**
   * Clears the bottle from the canvas.
   * @param {object} bottles - The bottle object to remove.
   */
  clearBottleFromCanvas(bottles) {
    setTimeout(() => {
      this.level.bottles.splice(this.level.bottles.indexOf(bottles), 1);
    }, 250);
  }
}
