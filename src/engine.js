function start(game) {
  window.requestAnimationFrame((timestamp) => gameLoop(game, timestamp));
}

function gameLoop(game, timestamp) {
  moveWizard.call(null, game);
  moveBugs();
  fireBalls.call(null, game, timestamp);
  killBugs();
  killWizard.call(null, game);

  if (timestamp > game.bugsState.timeSpawn) {
    game.createBug();
    game.bugsState.timeSpawn += 1500;
  }

  window.requestAnimationFrame(gameLoop.bind(null, game));
}
