const train = document.querySelector('.train');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
let animationInterval;

startButton.addEventListener('click', () => {
    train.style.animationPlayState = 'running';
    animationInterval = setInterval(() => {
        train.style.animation = 'none';
        setTimeout(() => {
            train.style.animation = 'trainAnimation 2s linear infinite';
        });
    }, 2000);
});

stopButton.addEventListener('click', () => {
    train.style.animationPlayState = 'paused';
    clearInterval(animationInterval);
});
