function start(game) {
  window.requestAnimationFrame(gameLoop.bind(null, game));
}

function gameLoop(game) {
  const { stateOfWizard } = game;
  const { wizardElement } = game;

  //Move wizard
  if (game.keys.KeyD) {
    if (stateOfWizard.left < game.screen.offsetWidth) {
      stateOfWizard.left += 10;
    }
  }
  if (game.keys.KeyA) {
    if (stateOfWizard.left > 10) {
      stateOfWizard.left -= 10;
    }
  }
  if (game.keys.KeyW) {
      console.log(stateOfWizard.top);
    if (stateOfWizard.top > 10) {
      stateOfWizard.top -= 10;
    }
  }
  if (game.keys.KeyS) {
    if (stateOfWizard.top < game.screen.offsetHeight - 5) {
      stateOfWizard.top += 10;
    }
  }

  // Rendering wizard
  wizardElement.style.left =
    Math.floor(Math.max(stateOfWizard.left - stateOfWizard.width, 0) - 5) +
    "px";

  wizardElement.style.top =
    Math.floor(Math.max(stateOfWizard.top - stateOfWizard.height, 0)) + "px";

  window.requestAnimationFrame(gameLoop.bind(null, game));
}
