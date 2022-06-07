function moveWizard(game) {
  const { stateOfWizard } = game;
  const { wizardElement } = game;

  if (game.keys.KeyD) {
    if (stateOfWizard.left < game.screen.offsetWidth) {
      stateOfWizard.left += stateOfWizard.speed;
    }
  }
  if (game.keys.KeyA) {
    if (stateOfWizard.left > 10) {
      stateOfWizard.left -= stateOfWizard.speed;
    }
  }
  if (game.keys.KeyW) {
    if (stateOfWizard.top > 10) {
      stateOfWizard.top -= stateOfWizard.speed;
    }
  }
  if (game.keys.KeyS) {
    if (stateOfWizard.top < game.screen.offsetHeight - 5) {
      stateOfWizard.top += stateOfWizard.speed;
    }
  }

  wizardElement.style.left =
    Math.floor(Math.max(stateOfWizard.left - stateOfWizard.width, 0) - 5) +
    "px";

  wizardElement.style.top =
    Math.floor(Math.max(stateOfWizard.top - stateOfWizard.height, 0)) + "px";
}

function moveBugs() {
  document.querySelectorAll(".bugs").forEach((e) => {
    e.style.left = parseInt(e.style.left) - game.bugsState.speed + "px";
    if (parseInt(e.style.left) < 0) {
      e.remove();
    }
  });
}

function fireBalls(game) {
  if (game.keys.Space) {
    game.wizardElement.classList.add("wizardFire");
    game.createFireBalls();
  } else {
    game.wizardElement.classList.remove("wizardFire");
  }
}
