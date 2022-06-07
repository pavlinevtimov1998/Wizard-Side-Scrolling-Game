const game = initialGameObj();

const availableKeys = ["KeyA", "KeyS", "KeyD", "KeyW", "Space"];

document.addEventListener("keydown", (e) => {
  if (availableKeys.includes(e.code)) {
    game.keys[e.code] = true;
  }
});
document.addEventListener("keyup", (e) => {
  if (availableKeys.includes(e.code)) {
    game.keys[e.code] = false;
  }
});

game.startGameBtn.addEventListener("click", (e) => {
  e.target.classList.add("hide");

  game.createWizard();
  game.score.classList.add('score');
  game.screen.appendChild(game.score);
  
  start(game);
});
