let canvas;
let world;
let keyboard = new Keyboard();
let contentLoaded = false;
allSounds;
activeFullscreen = false;
winner_Music.volume = 1;
game_music.volume = 0.3;
endboss_music.volume = 0.3;
start_screen_music.volume = 0.1;
chicken_dead_sound.volume = 0.35;
collect_coin_sound.volume = 0.3;
collect_bottle_sound.volume = 1;

/**
 * Function to play the start screen music.
 */

function playStartMusic() {
  const tryToPlay = setInterval(() => {
    start_screen_music
      .play()
      .then(() => {
        clearInterval(tryToPlay);
      })
      .catch((error) => {});
  }, 1000);
  checkSoundMuted();
}

/**
 * Initialization function for the game.
 */
function init() {
  game_music.play();
  initLevel();
  setTimeout(() => {
    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard);
  }, 10);
}

/**
 * Function to start the game.
 */

function startGame() {
  init();
  start_screen_music.muted = true;
  start_screen_music.pause();
  document.getElementById("exitfull-icon").style.display = "none";
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("start-btn").style.display = "none";
  document.getElementById("restart-btn").style.display = "flex";
  document.getElementById("info-btn").style.display = "none";
  startMobileButtonTouch();
  stopMobileButtonTouch();
}

/**
 * Function to restart the game.
 */
function restartGame() {
  location.reload();
  document.getElementById("restart-btn").style.display = "none";
  document.getElementById("game-over").style.display = "none";
  document.getElementById("winner").style.display = "none";
  document.getElementById("start-screen").style.display = "flex";
}

/**
 * Function to hide the control overlay.
 */

function hideControlOverlay() {
  document.getElementById("control-info").style.display = "none";
}

/**
 * Function to hide the information overlay.
 */
function hideInformationOverlay() {
  document.getElementById("information-text").style.display = "none";
}

/**
 * Function to show the control overlay.
 */
function showControls() {
  document.getElementById("control-info").style.display = "flex";
  document.getElementById("information-text").style.display = "none";
}

/**
 * Function to show the information overlay.
 */
function showInformation() {
  document.getElementById("control-info").style.display = "none";
  document.getElementById("information-text").style.display = "flex";
}

/**
 * Function to enter fullscreen mode.
 */
function fullScreen() {
  let fullscreen = document.getElementById("canvas-container");
  activeFullscreen = true;
  enterFullscreen(fullscreen);
  styleFullScreen();
  document.getElementById("start-btn").disabled = false;
  document.getElementById("restart-btn").disabled = false;
}

/**
 * Function to minimize fullscreen mode.
 */
function minimizeFullscreen() {
  document.getElementById("fullscreen-icon").style.display = "flex";
  let fullScreen = document.getElementById("canvas-container");
  activeFullscreen = false;
  exitFullscreen(fullScreen);
  styleMinimizedScreen();
}

/**
 * Function to style elements for fullscreen mode.
 */
function styleFullScreen() {
  document.getElementById("fullscreen-icon").style.display = "none";
  document.getElementById("canvas").style.height = "100%";
  document.getElementById("canvas").style.width = "100%";
  document.getElementById("start-screen").style.width = "100%";
  document.getElementById("start-screen").style.height = "100%";
  document.getElementById("start-img").style.width = "100%";
  document.getElementById("start-img").style.height = "100%";
  document.getElementById("winner").style.width = "100%";
  document.getElementById("winner").style.height = "100%";
  document.getElementById("game-over").style.width = "100%";
  document.getElementById("game-over").style.height = "100%";
  document.getElementById("game-over-img").style.width = "100%";
  document.getElementById("game-over-img").style.height = "100%";
}

/**
 * Function to style elements for minimized screen.
 */

function styleMinimizedScreen() {
  document.getElementById("exitfull-icon").style.display = "none";
  document.getElementById("canvas").style.height = "480px";
  document.getElementById("canvas").style.width = "720px";
  document.getElementById("start-screen").style.width = "720px";
  document.getElementById("start-screen").style.height = "480px";
  document.getElementById("start-img").style.height = "480px";
  document.getElementById("start-img").style.width = "720px";
  document.getElementById("winner").style.width = "720px";
  document.getElementById("winner").style.height = "480px";
  document.getElementById("game-over").style.width = "720px";
  document.getElementById("game-over").style.height = "480px";
  document.getElementById("game-over-img").style.width = "720px";
  document.getElementById("game-over-img").style.height = "480px";
}

/**
 * Function to request fullscreen mode for an HTML element.
 * @param {HTMLElement} element - The HTML element to enter fullscreen mode.
 */
function enterFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  }
}

/**
 * Function to exit fullscreen mode.
 */

function exitFullscreen() {
  if (document.exitFullscreen && activeFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

/**
 * Function to exit fullscreen mode on pressing the Escape key.
 * @param {Event} event - The keyboard event.
 */
function exitFullscreenOnEscape(event) {
  if (event.key === "Escape") {
    minimizeFullscreen();
  }
}

// Event listener for exiting fullscreen on pressing the Escape key.

const fullscreenElement = document.getElementById("canvas-container");
document.addEventListener("keyup", exitFullscreenOnEscape);

/**
 * Function to check the sound mute status and adjust sound settings accordingly.
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
 * Event listener for keydown events.
 * Captures keyboard input for game control.
 */
window.addEventListener("keydown", (event) => {
  if (event.key == "ArrowDown") {
    keyboard.DOWN = true;
  }
  if (event.key == "ArrowRight") {
    keyboard.RIGHT = true;
  }
  if (event.key == "ArrowUp") {
    keyboard.UP = true;
  }
  if (event.key == "ArrowLeft") {
    keyboard.LEFT = true;
  }
  if (event.key == " ") {
    keyboard.SPACE = true;
  }
  if (event.key == "d") {
    keyboard.D = true;
  }
});

/**
 * Event listener for keyup events.
 * Captures keyboard input for game control.
 */

window.addEventListener("keyup", (event) => {
  if (event.key == "ArrowDown") {
    keyboard.DOWN = false;
  }
  if (event.key == "ArrowRight") {
    keyboard.RIGHT = false;
  }
  if (event.key == "ArrowUp") {
    keyboard.UP = false;
  }
  if (event.key == "ArrowLeft") {
    keyboard.LEFT = false;
  }
  if (event.key == " ") {
    keyboard.SPACE = false;
  }
  if (event.key == "d") {
    keyboard.D = false;
  }
});

/**
 * Event listener for touch events on mobile devices.
 * Captures touch events for game control.
 */
function startMobileButtonTouch() {
  document.getElementById("left").addEventListener("touchstart", (event) => {
    keyboard.LEFT = true;
    event.preventDefault();
  });
  document.getElementById("right").addEventListener("touchstart", (event) => {
    keyboard.RIGHT = true;
    event.preventDefault();
  });
  document.getElementById("jump").addEventListener("touchstart", (event) => {
    keyboard.SPACE = true;
    event.preventDefault();
  });
  document.getElementById("throw").addEventListener("touchstart", (event) => {
    keyboard.D = true;
    event.preventDefault();
  });
}

/**
 * Event listener to stop touch events on mobile devices.
 * Stops capturing touch events for game control.
 */
function stopMobileButtonTouch() {
  document.getElementById("left").addEventListener("touchend", (event) => {
    keyboard.LEFT = false;
    event.preventDefault();
  });
  document.getElementById("right").addEventListener("touchend", (event) => {
    keyboard.RIGHT = false;
    event.preventDefault();
  });
  document.getElementById("jump").addEventListener("touchend", (event) => {
    keyboard.SPACE = false;
    event.preventDefault();
  });
  document.getElementById("throw").addEventListener("touchend", (event) => {
    keyboard.D = false;
    event.preventDefault();
  });
}

/**
 * Function to move the character right on button press.
 */
function moveRight() {
  const button = document.getElementById("right");

  button.addEventListener("mousedown", () => {
    keyboard.RIGHT = true;
  });
  button.addEventListener("mouseup", () => {
    keyboard.RIGHT = false;
  });
}

/**
 * Function to move the character left on button press.
 */
function moveLeft() {
  const button = document.getElementById("left");

  button.addEventListener("mousedown", () => {
    keyboard.LEFT = true;
  });
  button.addEventListener("mouseup", () => {
    keyboard.LEFT = false;
  });
}

/**
 * Function to make the character jump on button press.
 */
function jump() {
  const button = document.getElementById("jump");

  button.addEventListener("mousedown", () => {
    keyboard.SPACE = true;
  });
  button.addEventListener("mouseup", () => {
    keyboard.SPACE = false;
  });
}

/**
 * Function to make the character throw a bottle on button press.
 */
function throwBottle() {
  const button = document.getElementById("throw");

  button.addEventListener("mousedown", () => {
    keyboard.D = true;
  });
  button.addEventListener("mouseup", () => {
    keyboard.D = false;
  });
}
