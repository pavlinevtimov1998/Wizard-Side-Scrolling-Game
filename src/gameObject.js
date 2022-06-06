function initialGameObj() {
  const startGameBtn = document.querySelector(".start-game");
  const screen = document.querySelector(".screen");

  return {
    startGameBtn,
    screen,
    createWizard() {
      const wizardElement = document.createElement("div");
      wizardElement.classList.add("wizard");

      wizardElement.style.left = this.stateOfWizard.left + "%";
      wizardElement.style.top = this.stateOfWizard.top + "%";

      wizardElement.style.width = this.stateOfWizard.width;
      wizardElement.style.height = this.stateOfWizard.height;

      this.screen.appendChild(wizardElement);

      this.wizardElement = wizardElement;

      return wizardElement;
    },
    keys: {},
    stateOfWizard: {
      width: 82,
      height: 100,
      left: 20,
      top: 20,
      speed: 10,
    },
  };
}
