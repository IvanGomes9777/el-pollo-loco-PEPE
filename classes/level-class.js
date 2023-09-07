/**
 * Represents a level in the game.
 */
class Level {
  /**
   * Array of background objects in the level.
   * @type {BackgroundObject[]}
   */
  backgroundObjects;

  /**
   * Array of cloud objects in the level.
   * @type {Cloud[]}
   */
  clouds;

  /**
   * Array of coin objects in the level.
   * @type {Coin[]}
   */
  coins;

  /**
   * Array of bottle objects in the level.
   * @type {Bottle[]}
   */
  bottles;

  /**
   * Array of enemy objects in the level.
   * @type {Enemy[]}
   */
  enemies;

  /**
   * The end boss character in the level.
   * @type {Endboss}
   */
  endboss;

  /**
   * The end point of the level.
   * @type {number}
   */
  level_end = 4650;

  /**
   * Array of throwable objects in the level.
   * @type {ThrowableObject[]}
   */
  throwableObjects;

  /**
   * Array of collected bottles in the level.
   * @type {Bottle[]}
   */
  collectedBottles = [];

  /**
   * Array of collected coins in the level.
   * @type {Coin[]}
   */
  collectedCoins = [];

  /**
   * Creates an instance of the Level class.
   * @param {BackgroundObject[]} backgroundObjects - Array of background objects.
   * @param {Cloud[]} clouds - Array of cloud objects.
   * @param {Coin[]} coins - Array of coin objects.
   * @param {Bottle[]} bottles - Array of bottle objects.
   * @param {Enemy[]} enemies - Array of enemy objects.
   * @param {Endboss} endboss - The end boss character.
   * @param {ThrowableObject[]} throwableObjects - Array of throwable objects.
   */
  constructor(
    backgroundObjects,
    clouds,
    coins,
    bottles,
    enemies,
    endboss,
    throwableObjects
  ) {
    this.backgroundObjects = backgroundObjects;
    this.clouds = clouds;
    this.coins = coins;
    this.bottles = bottles;
    this.enemies = enemies;
    this.endboss = endboss;
    this.throwableObjects = throwableObjects;
  }
}
