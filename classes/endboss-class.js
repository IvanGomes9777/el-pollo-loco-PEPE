/**
 * Represents the Endboss character in the game.
 * @extends moveableObject
 */
class Endboss extends moveableObject {
  /**
   * Width of the Endboss character.
   * @type {number}
   */
  width = 180;

  /**
   * Height of the Endboss character.
   * @type {number}
   */
  height = 350;

  /**
   * X-coordinate of the Endboss character.
   * @type {number}
   */
  x = 4850;

  /**
   * Y-coordinate of the Endboss character.
   * @type {number}
   */
  y = 100;

  /**
   * Speed of the Endboss character.
   * @type {number}
   */
  speed = 8.5;

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
   * Reference to the main character.
   * @type {Character}
   */
  character;

  /**
   * Energy level of the Endboss character.
   * @type {number}
   */
  energy = 100;

  /**
   * Image cache for character animations.
   * @type {Object}
   */
  imageCache = {};

  /**
   * Indicates if the character is facing the opposite direction.
   * @type {boolean}
   */
  otherDirection = false;

  /**
   * Flag for first contact with the character.
   * @type {boolean}
   */
  firstContact = false;

  /**
   * Flag for character movement.
   * @type {boolean}
   */
  isMoving = false;

  /**
   * Offset values for collision detection.
   * @type {Object}
   */
  offset = {
    right: 30,
    left: 30,
    top: 70,
    bottom: 20,
  };

  /**
   * Array of images for the walking animation.
   * @type {string[]}
   */
  Walking_Images_Endboss = [
    "img/4_enemie_boss_chicken/1_walk/G1.png",
    "img/4_enemie_boss_chicken/1_walk/G2.png",
    "img/4_enemie_boss_chicken/1_walk/G3.png",
    "img/4_enemie_boss_chicken/1_walk/G4.png",
  ];

  /**
   * Array of images for the alert animation.
   * @type {string[]}
   */
  Alert_Images_Endboss = [
    "img/4_enemie_boss_chicken/2_alert/G5.png",
    "img/4_enemie_boss_chicken/2_alert/G6.png",
    "img/4_enemie_boss_chicken/2_alert/G7.png",
    "img/4_enemie_boss_chicken/2_alert/G8.png",
    "img/4_enemie_boss_chicken/2_alert/G9.png",
    "img/4_enemie_boss_chicken/2_alert/G10.png",
    "img/4_enemie_boss_chicken/2_alert/G11.png",
    "img/4_enemie_boss_chicken/2_alert/G12.png",
  ];

  /**
   * Array of images for the attack animation.
   * @type {string[]}
   */
  Attack_Images_Endboss = [
    "img/4_enemie_boss_chicken/3_attack/G13.png",
    "img/4_enemie_boss_chicken/3_attack/G14.png",
    "img/4_enemie_boss_chicken/3_attack/G15.png",
    "img/4_enemie_boss_chicken/3_attack/G16.png",
    "img/4_enemie_boss_chicken/3_attack/G17.png",
    "img/4_enemie_boss_chicken/3_attack/G18.png",
    "img/4_enemie_boss_chicken/3_attack/G19.png",
    "img/4_enemie_boss_chicken/3_attack/G20.png",
  ];

  /**
   * Array of images for the hurt animation.
   * @type {string[]}
   */
  Hurt_Images_Endboss = [
    "img/4_enemie_boss_chicken/4_hurt/G21.png",
    "img/4_enemie_boss_chicken/4_hurt/G22.png",
    "img/4_enemie_boss_chicken/4_hurt/G23.png",
  ];

  /**
   * Array of images for the dead animation.
   * @type {string[]}
   */
  Dead_Images_Endboss = [
    "img/4_enemie_boss_chicken/5_dead/G24.png",
    "img/4_enemie_boss_chicken/5_dead/G25.png",
    "img/4_enemie_boss_chicken/5_dead/G26.png",
  ];

  /**
   * Creates an instance of the Endboss class.
   */
  constructor() {
    super().loadImage("img/4_enemie_boss_chicken/2_alert/G5.png");
    this.loadImages(this.Walking_Images_Endboss);
    this.loadImages(this.Alert_Images_Endboss);
    this.loadImages(this.Attack_Images_Endboss);
    this.loadImages(this.Hurt_Images_Endboss);
    this.loadImages(this.Dead_Images_Endboss);
    this.animate();
  }

  /**
   * Animates the character's movements and actions.
   */
  animate() {
    this.moveInterval = setInterval(() => {
      this.playMovement();
    }, 4500 / 20);

    this.playImagesInterval = setInterval(() => {
      this.playImages();
    }, 150);
  }

  /**
   * Plays character animations based on the current state.
   */
  playImages() {
    if (this.isDead()) {
      this.clearAllIntervals();
      game_music.muted = true;
      this.endbossIsDeadAnimation();
      setInterval(() => {
        this.y++;
        this.x = this.x;
      }, 30);
      this.showEndScreen();
    } else {
      if (this.isHurt()) {
        this.endbossIsHurtAnimation();
      }
    }
  }

  /**
 * Handles the movement of the end boss.
 */
  playMovement() {
    if (this.shouldStartEndbossMovement()) {
      this.startEndbossMovement();
    } else if (this.shouldEndbossMoveLeft()) {
      this.endbossMovingLeft();
    } else if (this.shouldEndbossMoveRight()) {
      this.endbossMovingRight();
    } else {
      this.playAnimation(this.Alert_Images_Endboss);
    }
  }
  
  /**
 * Checks if the end boss movement should start.
 * @returns {boolean} True if the condition is met, otherwise false.
 */
  shouldStartEndbossMovement() {
    return world.character.x > 4300 && !this.firstContact;
  }
  
  /**
 * Starts the end boss movement.
 */
  startEndbossMovement() {
    game_music.pause();
    endboss_music.play();
    this.isMoving = true;
    this.firstContact = true;
    setTimeout(() => {
      this.endbossMovingLeft();
    }, 2000);
  }
  
  /**
 * Checks if the end boss should move left.
 * @returns {boolean} True if the condition is met, otherwise false.
 */
  shouldEndbossMoveLeft() {
    return world.character.x < this.x && this.firstContact;
  }
  
  /**
 * Checks if the end boss should move right.
 * @returns {boolean} True if the condition is met, otherwise false.
 */
  shouldEndbossMoveRight() {
    return this.x < 4200 && this.firstContact;
  }
  

  /**
   * Plays the dead animation and handles character movement.
   */
  endbossIsDeadAnimation() {
    this.playAnimation(this.Dead_Images_Endboss);
    this.isMoving = false;
  }

  /**
   * Moves the character to the right.
   */
  endbossMovingRight() {
    this.playAnimation(this.Walking_Images_Endboss);
    this.moveRight();
    this.otherDirection = true;
    this.isMoving = true;
    (this.speed = 6), 0;
  }

  /**
   * Moves the character to the left.
   */
  endbossMovingLeft() {
    this.playAnimation(this.Walking_Images_Endboss);
    this.moveLeft();
    this.otherDirection = false;
    this.isMoving = true;
    (this.speed = 6), 0;
  }

  /**
   * Plays the hurt animation and sound.
   */
  endbossIsHurtAnimation() {
    endboss_Sound.play();
    this.playAnimation(this.Hurt_Images_Endboss);
  }

  /**
   * Plays the alert animation.
   */
  endbossIsAlert() {
    this.playAnimation(this.Alert_Images_Endboss);
  }

  /**
   * Plays an animation from the specified array of images.
   * @param {string[]} images - Array of image paths for the animation.
   */
  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  /**
   * Shows the end screen and plays the winner music.
   */
  showEndScreen() {
    setTimeout(() => {
      endboss_music.pause();
      walkingSound.pause();
      game_music.pause();
      winner_Music.volume = 0.15;
      winner_Music.play();
      document.getElementById("winner").style.display = "flex";
      document.getElementById("restart-btn-win").style.display = "flex";
    }, 500);
  }

  /**
   * Clears all active intervals.
   */
  clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
  }
}
