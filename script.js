const flap = document.getElementById('flap');
const letter = document.getElementById('letter');
const button = document.getElementById('open');
const gift = document.getElementById('gift');

let isOpen = false;

document.getElementById('open').addEventListener('click', () => {
    if (!isOpen) {
        openLetter();
    }
});

gift.addEventListener('click', () => {
    if (isOpen) {
        closeLetterFast();
    }
});

function openLetter() {
    isOpen = true;
    flap.classList.add('rotate-180');
    letter.classList.remove('translate-y-full', 'opacity-0', 'invisible');
    letter.classList.add('-translate-y-48');

    setTimeout(() => {
        letter.classList.remove('-translate-y-48');
        letter.classList.add('translate-y-24');
    }, 500);

    setTimeout(() => {
        letter.classList.remove('translate-y-24');
        letter.classList.add('-translate-y-6');
    }, 900);

    setTimeout(() => {
        letter.classList.remove('-translate-y-6');
        letter.classList.add('translate-y-0');
    }, 1200);

    button.innerText = "";
}

function closeLetterFast() {
    isOpen = false;
    letter.classList.add('-translate-y-6');

    setTimeout(() => {
        letter.classList.remove('-translate-y-6');
        letter.classList.add('translate-y-24');
    }, 150);

    setTimeout(() => {
        letter.classList.remove('translate-y-24');
        letter.classList.add('translate-y-full', 'opacity-0', 'invisible');
    }, 300);

    setTimeout(() => {
        flap.classList.remove('rotate-180');
        button.innerText = "Open";
    }, 500);
}
//testing-commit