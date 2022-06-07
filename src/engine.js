function start(game) {
  window.requestAnimationFrame(timestamp => gameLoop(game, timestamp));
}

function gameLoop(game, timestamp) {
  moveWizard.call(null, game);

  console.log(timestamp);

  game.createBug();

  window.requestAnimationFrame(gameLoop.bind(null, game));
}