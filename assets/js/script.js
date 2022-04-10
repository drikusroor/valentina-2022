// on document load
document.addEventListener("DOMContentLoaded", () => {
  // array of utf-8 emojis
  const emojis = [
    "🐶",
    "🐱",
    "🐭",
    "🐹",
    "🐰",
    "🦊",
    "🐻",
    "🐼",
    "🐨",
    "🐯",
    "🦁",
    "🐮",
    "🐷",
    "🐸",
    "🐵",
    "🙈",
    "🙉",
    "🙊",
  ];

  // select chairs as array
  const chairs = document.querySelectorAll(".chair");

  // pick random emoji for chair
  function rotateChairEmoji(chair) {
    // pick a random emoji
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];

    // set the chair's before content to the emoji
    chair.style = `--content: '${emoji}'`;
  }

  chairs.forEach((chair) => {
    rotateChairEmoji(chair);
  });

  const curtains = document.querySelectorAll(".curtain");
  const dancer = document.querySelector(".dancer-container");
  const buppon = document.querySelector(".buppon");
  const audio = document.querySelector("audio");

  audio.addEventListener("play", () => {
    // set animation to play
    curtains.forEach((curtain) => {
      curtain.style.animationPlayState = "running";
    });

    // set dancer to play
    dancer.style.animationPlayState = "running";

    // set buppon to play
    buppon.style.animationPlayState = "running";
  });

  audio.addEventListener("pause", () => {
    // set animation to pause
    curtains.forEach((curtain) => {
      curtain.style.animationPlayState = "paused";
    });

    // set dancer to pause
    dancer.style.animationPlayState = "paused";

    // set buppon to pause
    buppon.style.animationPlayState = "paused";
  });
});
