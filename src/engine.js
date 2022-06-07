function start(game) {
  window.requestAnimationFrame(gameLoop.bind(null, game));
}

function gameLoop(game) {
  moveWizard.call(null, game);

  window.requestAnimationFrame(gameLoop.bind(null, game));
}