/**
 * load all sounds and effects in a variables
 */
const start_screen_music = new Audio("audio/start-game.mp3");
const game_music = new Audio("audio/LaChona.mp3");
const walkingSound = new Audio("audio/walking.mp3");
const jumpingSound = new Audio("audio/jump.mp3");
const deadSound = new Audio("audio/dead.mp3");
const hurtSound = new Audio("audio/hurt.mp3");
const chicken_dead_sound = new Audio("audio/chicken-sound.mp3");
const endboss_Sound = new Audio("audio/endboss-dead.mp3");
const bottle_splash_sound = new Audio("audio/glass_shatter.mp3");
const collect_coin_sound = new Audio("audio/coin.mp3");
const collect_bottle_sound = new Audio("audio/bottle.mp3");
const endboss_music = new Audio("audio/endboss-coming.mp3");
const snoringSound = new Audio("audio/sleeping.mp3");
const gameOverMusic = new Audio("audio/game-over.mp3");
const winner_Music = new Audio("audio/winner.mp3");
const gameOverVoice = new Audio("audio/game-over.mp3");

/**
 * Initialize an array that stores all the sounds to use in the game.
 * @type {HTMLAudioElement[]}
 */
const allSounds = [
  game_music,
  gameOverMusic,
  start_screen_music,
  winner_Music,
  walkingSound,
  jumpingSound,
  deadSound,
  hurtSound,
  gameOverVoice,
  chicken_dead_sound,
  endboss_Sound,
  bottle_splash_sound,
  collect_coin_sound,
  collect_bottle_sound,
  endboss_music,
  snoringSound,
];

/**
 * Check if sounds are muted and toggle the setting
 */
function checkSoundMuted() {
  const isMuted = getMuteState();
  if (isMuted) {
    muteAllSounds();
  } else {
    unmuteAllSounds();
  }
}

/**
 * Save the current mute state to local storage.
 * @param {boolean} muted - The current mute state (true if muted, false if not).
 */

function saveMuteState(muted) {
  localStorage.setItem("soundMuted", muted);
}

/**
 * Load the last mute state from local storage.
 * @returns {boolean} - The last mute state (true if muted, false if not).
 */

function getMuteState() {
  const muted = localStorage.getItem("soundMuted");
  return muted === "true";
}

/**
 * Mute all sound effects and music, save the mute state, and update the display.
 */
function muteAllSounds() {
  allSounds.forEach((sound) => {
    sound.muted = true;
  });
  saveMuteState(true);
  document.getElementById("sound-mute").style.display = "none";
  document.getElementById("sound-on").style.display = "flex";
}

/**
 * Unmute all sound effects and music, save the mute state, and update the display.
 */
function unmuteAllSounds() {
  allSounds.forEach((sound) => {
    sound.muted = false;
  });
  saveMuteState(false);
  document.getElementById("sound-mute").style.display = "flex";
  document.getElementById("sound-on").style.display = "none";
}
