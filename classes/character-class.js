class Character extends moveableObject {
  y = 180;
  x = 100;
  width = 160;
  height = 250;
  speed = 13.5;
  energy = 100;
  acceleration = 2;
  imageCache = {};
  throwableObjects;
  amountCollectedCoins = 0;
  amountCollectedBottles = 0;
  collectedBottles = [];
  throwableObjects = [];
  endboss;
  character;
  level;
  world;
  lastMoveTime = 0;
  offset = {
    top: 120,
    bottom: 0,
    left: 25,
    right: 25,
  };

  /**
   * Array of images for character's idle state.
   * @type {string[]}
   */

  Idle_Images = [
    "img/2_character_pepe/1_idle/idle/I-1.png",
    "img/2_character_pepe/1_idle/idle/I-2.png",
    "img/2_character_pepe/1_idle/idle/I-3.png",
    "img/2_character_pepe/1_idle/idle/I-4.png",
    "img/2_character_pepe/1_idle/idle/I-5.png",
    "img/2_character_pepe/1_idle/idle/I-6.png",
    "img/2_character_pepe/1_idle/idle/I-7.png",
    "img/2_character_pepe/1_idle/idle/I-8.png",
    "img/2_character_pepe/1_idle/idle/I-9.png",
    "img/2_character_pepe/1_idle/idle/I-10.png",
  ];

  /**
   * Array of images for character's long idle state.
   * @type {string[]}
   */
  Long_Idle_Images = [
    "img/2_character_pepe/1_idle/long_idle/I-11.png",
    "img/2_character_pepe/1_idle/long_idle/I-12.png",
    "img/2_character_pepe/1_idle/long_idle/I-13.png",
    "img/2_character_pepe/1_idle/long_idle/I-14.png",
    "img/2_character_pepe/1_idle/long_idle/I-15.png",
    "img/2_character_pepe/1_idle/long_idle/I-16.png",
    "img/2_character_pepe/1_idle/long_idle/I-17.png",
    "img/2_character_pepe/1_idle/long_idle/I-18.png",
    "img/2_character_pepe/1_idle/long_idle/I-19.png",
    "img/2_character_pepe/1_idle/long_idle/I-20.png",
  ];

  /**
   * Array of images for character's walking state.
   * @type {string[]}
   */
  Walking_Images = [
    "img/2_character_pepe/2_walk/W-21.png",
    "img/2_character_pepe/2_walk/W-22.png",
    "img/2_character_pepe/2_walk/W-23.png",
    "img/2_character_pepe/2_walk/W-24.png",
    "img/2_character_pepe/2_walk/W-25.png",
    "img/2_character_pepe/2_walk/W-26.png",
  ];

  /**
   * Array of images for character's jumping state.
   * @type {string[]}
   */

  Jumping_Images = [
    "img/2_character_pepe/3_jump/J-31.png",
    "img/2_character_pepe/3_jump/J-32.png",
    "img/2_character_pepe/3_jump/J-33.png",
    "img/2_character_pepe/3_jump/J-34.png",
    "img/2_character_pepe/3_jump/J-35.png",
    "img/2_character_pepe/3_jump/J-36.png",
    "img/2_character_pepe/3_jump/J-37.png",
    "img/2_character_pepe/3_jump/J-38.png",
    "img/2_character_pepe/3_jump/J-39.png",
  ];

  /**
   * Array of images for character's hurt state.
   * @type {string[]}
   */
  Hurt_Images = [
    "img/2_character_pepe/4_hurt/H-41.png",
    "img/2_character_pepe/4_hurt/H-42.png",
    "img/2_character_pepe/4_hurt/H-43.png",
  ];

  /**
   * Array of images for character's dead state.
   * @type {string[]}
   */

  Dead_Images = [
    "img/2_character_pepe/5_dead/D-51.png",
    "img/2_character_pepe/5_dead/D-52.png",
    "img/2_character_pepe/5_dead/D-53.png",
    "img/2_character_pepe/5_dead/D-54.png",
    "img/2_character_pepe/5_dead/D-55.png",
    "img/2_character_pepe/5_dead/D-56.png",
    "img/2_character_pepe/5_dead/D-57.png",
  ];

  /**
   * Creates a new character object and initializes its animations.
   */
  constructor() {
    super().loadImage("img/2_character_pepe/1_idle/idle/I-1.png");
    this.loadImages(this.Idle_Images);
    this.loadImages(this.Long_Idle_Images);
    this.loadImages(this.Walking_Images);
    this.loadImages(this.Jumping_Images);
    this.loadImages(this.Hurt_Images);
    this.loadImages(this.Dead_Images);
    this.animate();
    this.applyGravity();
  }

  /**
   * Initiates character animation loops.
   */
  animate() {
    this.moveInterval = setInterval(() => {
      this.playMovement();
    }, 1000 / 20);

    setInterval(() => {
      this.playImages();
    }, 50);
  }

  playImages() {
    if (this.isDead()) {
      this.characterDeathAnimation();
      setTimeout(() => {
        this.showGameOverScreen();
      }, 1000);
    }
    if (this.isHurt()) {
      this.characterHurtAnimation();
      hurtSound.play();
    }
    if (this.isAboveGround()) {
      this.playAnimation(this.Jumping_Images);
    }
    if (!this.characterResting && !this.characterSleeping) {
      this.playAnimation(this.Walking_Images);
    }
  }

  playMovement() {
    walkingSound.pause();
    if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end) {
      snoringSound.pause();
      this.characterMoveRight();
    } else if (this.world.keyboard.LEFT && this.x > -719) {
      snoringSound.pause();
      this.characterMoveLeft();
    } else if (
      !this.world.keyboard.LEFT &&
      !this.world.keyboard.RIGHT &&
      this.lastMoveTime <= 8000
    ) {
      this.characterResting();
    } else if (
      !this.world.keyboard.LEFT &&
      !this.world.keyboard.RIGHT &&
      this.lastMoveTime >= 8000
    ) {
      this.characterSleeping();
      snoringSound.play();
    }
    if (this.world.keyboard.SPACE && !this.isAboveGround()) {
      this.characterIsJumping();
    }
  }

  characterResting() {
    this.lastMoveTime += 70;
    this.playAnimation(this.Idle_Images);
  }

  characterSleeping() {
    this.playAnimation(this.Long_Idle_Images);
  }

  characterHurtAnimation() {
    snoringSound.pause();
    this.lastMoveTime = 0;
    this.playAnimation(this.Hurt_Images);
  }

  characterMoveLeft() {
    this.lastMoveTime = 0;
    this.moveLeft();
    this.playAnimation(this.Walking_Images);
    this.otherDirection = true;
    walkingSound.play();
  }

  characterMoveRight() {
    this.lastMoveTime = 0;
    this.moveRight();
    this.playAnimation(this.Walking_Images);
    this.otherDirection = false;
    walkingSound.play();
  }

  characterIsJumping() {
    this.lastMoveTime = 0;
    snoringSound.pause();
    jumpingSound.pause();
    this.jump();
    jumpingSound.play();
  }

  characterDeathAnimation() {
    deadSound.play();
    snoringSound.pause();
    this.lastMoveTime = 0;
    clearInterval(this.moveInterval);
    this.playAnimation(this.Dead_Images);
    this.killedPepeToHell();
    setTimeout(() => {
      deadSound.volume = 0;
    }, 1500);
  }

  killedPepeToHell() {
    setInterval(() => {
      this.y++;
    }, 80);
  }

  collectCoin() {
    if (this.amountCollectedCoins >= 100) {
      this.amountCollectedCoins = 100;
    } else {
      this.amountCollectedCoins += 10;
    }
  }

  collectBottle() {
    if (this.amountCollectedBottles >= 100) {
      this.amountCollectedBottles = 100;
    } else {
      this.amountCollectedBottles += 10;
    }
  }

  showGameOverScreen() {
    walkingSound.pause();
    document.getElementById("game-over").style.display = "flex";
    document.getElementById("restart-btn").style.display = "flex";
    game_music.pause();
    endboss_music.muted = true;
    game_music.muted = true;
    setTimeout(() => {
      gameOverVoice.play();
    }, 150);
    setTimeout(() => {
      this.clearAllIntervals();
    }, 1500);
    setTimeout(() => {
      gameOverMusic.play();
    }, 50);
  }

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
    this.world.camera = -this.x + 80;
  }
}
