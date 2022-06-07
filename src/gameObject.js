function initialGameObj() {
  const startGameBtn = document.querySelector(".start-game");
  const screen = document.querySelector(".screen");

  return {
    startGameBtn,
    screen,
    createWizard() {
      const wizardElement = document.createElement("div");
      wizardElement.classList.add("wizard");

      wizardElement.style.left = this.stateOfWizard.left + "px";
      wizardElement.style.top = this.stateOfWizard.top + "px";

      wizardElement.style.width = this.stateOfWizard.width + "px";
      wizardElement.style.height = this.stateOfWizard.height + "px";

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
    createBug() {
      const bugElement = document.createElement("div");
      bugElement.classList.add("bugs");

      bugElement.style.left = screen.offsetWidth - this.bugsState.width + "px";
      bugElement.style.top = Math.floor(Math.random() * 700) + "px";

      bugElement.style.width = this.bugsState.width + "px";
      bugElement.style.height = this.bugsState.height + "px";

      this.screen.appendChild(bugElement);

      this.bugElement = bugElement;

      return bugElement;
    },
    bugsState: {
      width: 52,
      height: 52,
      timeSpawn: 0,
      speed: 5,
    },
    createFireBalls() {
      const fireBalls = document.createElement("div");
      fireBalls.classList.add("fireBalls");

      fireBalls.style.width = this.stateOfFireBalls.width + "px";
      fireBalls.style.height = this.stateOfFireBalls.height + "px";

      fireBalls.style.left =
        parseInt(this.wizardElement.style.left) +
        this.stateOfWizard.width +
        "px";
      fireBalls.style.top =
        parseInt(this.wizardElement.style.top) +
        this.stateOfWizard.height / 3 +
        "px";

      this.screen.appendChild(fireBalls);

      this.fireBalls = fireBalls;

      return fireBalls;
    },
    stateOfFireBalls: {
      width: 32,
      height: 32,
    },
  };
}
