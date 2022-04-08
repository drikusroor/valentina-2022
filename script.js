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

});
