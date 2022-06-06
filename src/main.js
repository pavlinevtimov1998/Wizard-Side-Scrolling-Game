const state = initState();

state.startGame.addEventListener('click', e => {
    e.target.classList.add('hide');

    start();
})