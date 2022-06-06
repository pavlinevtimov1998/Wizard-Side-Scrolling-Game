function initState() {
  const startGame = document.querySelector(".start-game");

  return {
    startGame,
    createWizard() {
      const wizardElement = document.createElement("div");
      wizardElement.classList.add("wizard");

      wizardElement.style.left = 20 + "%";
      wizardElement.style.top = 20 + "%";
    },
  };
}
