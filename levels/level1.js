/**
 * Initializes the first level of the game with background objects, clouds, coins, bottles, chickens, and an end boss.
 */
let level1;

/**
 * The first level of the game.
 * @type {Level}
 */

function initLevel() {
  level1 = new Level(
    /**
     * Array of background objects for the level.
     * @type {BackgroundObject[]}
     */
    [
      new BackgroundObject("img/5_background/layers/air.png", -719 * 2),
      new BackgroundObject(
        "img/5_background/layers/3_third_layer/1.png",
        -719 * 2
      ),
      new BackgroundObject(
        "img/5_background/layers/2_second_layer/1.png",
        -719 * 2
      ),
      new BackgroundObject(
        "img/5_background/layers/1_first_layer/1.png",
        -719 * 2
      ),
      new BackgroundObject("img/5_background/layers/air.png", -719),
      new BackgroundObject("img/5_background/layers/3_third_layer/2.png", -719),
      new BackgroundObject(
        "img/5_background/layers/2_second_layer/2.png",
        -719
      ),
      new BackgroundObject("img/5_background/layers/1_first_layer/2.png", -719),
      new BackgroundObject("img/5_background/layers/air.png", 0),
      new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 0),
      new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 0),
      new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 0),
      new BackgroundObject("img/5_background/layers/air.png", 719),
      new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 719),
      new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 719),
      new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 719),
      new BackgroundObject("img/5_background/layers/air.png", 719 * 2),
      new BackgroundObject(
        "img/5_background/layers/3_third_layer/1.png",
        719 * 2
      ),
      new BackgroundObject(
        "img/5_background/layers/2_second_layer/1.png",
        719 * 2
      ),
      new BackgroundObject(
        "img/5_background/layers/1_first_layer/1.png",
        719 * 2
      ),
      new BackgroundObject("img/5_background/layers/air.png", 719 * 3),
      new BackgroundObject(
        "img/5_background/layers/3_third_layer/2.png",
        719 * 3
      ),
      new BackgroundObject(
        "img/5_background/layers/2_second_layer/2.png",
        719 * 3
      ),
      new BackgroundObject(
        "img/5_background/layers/1_first_layer/2.png",
        719 * 3
      ),
      new BackgroundObject("img/5_background/layers/air.png", 719 * 4),
      new BackgroundObject(
        "img/5_background/layers/3_third_layer/1.png",
        719 * 4
      ),
      new BackgroundObject(
        "img/5_background/layers/2_second_layer/1.png",
        719 * 4
      ),
      new BackgroundObject(
        "img/5_background/layers/1_first_layer/1.png",
        719 * 4
      ),
      new BackgroundObject("img/5_background/layers/air.png", 719 * 5),
      new BackgroundObject(
        "img/5_background/layers/3_third_layer/2.png",
        719 * 5
      ),
      new BackgroundObject(
        "img/5_background/layers/2_second_layer/2.png",
        719 * 5
      ),
      new BackgroundObject(
        "img/5_background/layers/1_first_layer/2.png",
        719 * 5
      ),
      new BackgroundObject("img/5_background/layers/air.png", 719 * 6),
      new BackgroundObject(
        "img/5_background/layers/3_third_layer/1.png",
        719 * 6
      ),
      new BackgroundObject(
        "img/5_background/layers/2_second_layer/1.png",
        719 * 6
      ),
      new BackgroundObject(
        "img/5_background/layers/1_first_layer/1.png",
        719 * 6
      ),
      new BackgroundObject("img/5_background/layers/air.png", 719 * 7),
      new BackgroundObject(
        "img/5_background/layers/3_third_layer/2.png",
        719 * 7
      ),
      new BackgroundObject(
        "img/5_background/layers/2_second_layer/2.png",
        719 * 7
      ),
      new BackgroundObject(
        "img/5_background/layers/1_first_layer/2.png",
        719 * 7
      ),
    ],

    /**
     * Array of cloud objects for the level.
     * @type {Cloud[]}
     */
    [
      new Cloud(),
      new Cloud(),
      new Cloud(),
      new Cloud(),
      new Cloud(),
      new Cloud(),
    ],

    /**
     * Array of coin objects for the level.
     * @type {Coin[]}
     */
    [
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
    ],

    /**
     * Array of bottle objects for the level.
     * @type {Bottle[]}
     */
    [
      new Bottle(),
      new Bottle(),
      new Bottle(),
      new Bottle(),
      new Bottle(),
      new Bottle(),
      new Bottle(),
      new Bottle(),
      new Bottle(),
      new Bottle(),
    ],
    /**
     * Array of chicken and small chicken objects for the level.
     * @type {(Chicken|SmallChicken)[]}
     */
    [
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),

      new SmallChicken(),
      new SmallChicken(),
      new SmallChicken(),
      new SmallChicken(),
      new SmallChicken(),
      new SmallChicken(),
      new SmallChicken(),
      new SmallChicken(),
      new SmallChicken(),
      new SmallChicken(),
      new SmallChicken(),
      new SmallChicken(),
      new SmallChicken(),
      new SmallChicken(),
      new SmallChicken(),
    ],

    /**
     * Array of end boss objects for the level.
     * @type {Endboss[]}
     */
    [new Endboss()]
  );
}
