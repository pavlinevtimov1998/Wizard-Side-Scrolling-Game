function start(game) {
  window.requestAnimationFrame((timestamp) => gameLoop(game, timestamp));
}

function gameLoop(game, timestamp) {
  moveWizard.call(null, game);

  if (timestamp > game.bugsState.timeSpawn) {
    game.createBug();
    game.bugsState.timeSpawn += 1500;
  }

  document.querySelectorAll(".bugs").forEach((e) => {
    e.style.left = parseInt(e.style.left) - game.bugsState.speed + "px";
    if (parseInt(e.style.left) < 0) {
      e.remove();
    }
  });

  window.requestAnimationFrame(gameLoop.bind(null, game));
}
