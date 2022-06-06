function initialGameObj() {
  const startGameBtn = document.querySelector(".start-game");
  const screen = document.querySelector(".screen");

  return {
    startGameBtn,
    screen,
    createWizard() {
      const wizardElement = document.createElement("div");
      wizardElement.classList.add("wizard");

      wizardElement.style.left = 20 + "%";
      wizardElement.style.top = 20 + "%";

      this.screen.appendChild(wizardElement);

      this.wizardElement = wizardElement;

      return wizardElement;
    },
  };
}
