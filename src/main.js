const game = initialGameObj();

game.startGameBtn.addEventListener("click", (e) => {
  e.target.classList.add("hide");

  game.createWizard();

  start(state);
});
