const questionContainer = document.getElementById('question-container');
const successContainer = document.getElementById('success-container');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const mainImage = document.getElementById('main-image');
const questionText = document.getElementById('question');

let noClickCount = 0;

// Messages to cycle through
const messages = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;(",
    "Is that your final answer?",
    "You're breaking my heart ;(",
    "Plsss? :( You're breaking my heart",
];

// GIFs to cycle through (Sad/Funny)
// Note: These URLs are placeholders for the logic. 
// If they break, replace them with valid direct GIF links.
const gifs = [
    "https://media1.tenor.com/m/L7Le6BBf07kAAAAC/gojill-the-meow-please.gif", // Default: Cute asking
    "https://media1.tenor.com/m/rl_da90w6a0AAAAC/%E7%9A%849.gif",   // Sad 1
    "https://media1.tenor.com/m/iA-8FovUiVgAAAAC/sad-emoji-man.gif",    // Sad 2
    "https://media1.tenor.com/m/OroVCOXbuUUAAAAC/sadhamstergirl.gif",        // Sad 3
    "https://media1.tenor.com/m/XK6YNhtIjAIAAAAC/all-by-myself.gif",        // Sad 4
    "https://media1.tenor.com/m/vEcyUvOTLI4AAAAC/adeus-volte-sempre.gif", // Sad 5 (Intense)
    "https://media1.tenor.com/m/jotyiHEoUGUAAAAC/anime.gif", // Sad 6
    "https://media1.tenor.com/m/99sQqbsDt1kAAAAC/sad.gif",        // Sad 7
    "https://media1.tenor.com/m/UacnAFq8PhoAAAAC/nub-cat-nub.gif",        // Sad 8
];

noBtn.addEventListener('click', () => {
    noClickCount++;

    // Change Text
    const messageIndex = Math.min(noClickCount, messages.length - 1);
    noBtn.innerText = messages[messageIndex];

    // Change Image: Loop through sad gifs (indices 1 to length-1)
    // We want to skip index 0 (the happy/asking gif)
    const sadGifsCount = gifs.length - 1;
    const gifIndex = ((noClickCount - 1) % sadGifsCount) + 1;
    mainImage.src = gifs[gifIndex];

    // Grow Yes Button
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    const newSize = currentSize * 1.2; // Grow by 20% each time (reduced for better UX)
    yesBtn.style.fontSize = `${newSize}px`;

    // Make the No button jump randomly on every click
    noBtn.style.position = "fixed"; // Use fixed to position relative to viewport
    noBtn.style.zIndex = "9999";    // Ensure it stays on top

    // Calculate random position within the viewport
    // Subtract button width/height to keep it fully on screen
    const maxX = window.innerWidth - noBtn.offsetWidth - 20; // Padding
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const randomX = Math.max(0, Math.random() * maxX);
    const randomY = Math.max(0, Math.random() * maxY);

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

yesBtn.addEventListener('click', () => {
    questionContainer.classList.add('hidden');
    successContainer.classList.remove('hidden');

    // Celebration effect or just the static success screen
    // We could add confetti here if we had the library, 
    // but the Happy GIF is usually enough for this style.
});

const goBackBtn = document.getElementById('go-back-btn');

goBackBtn.addEventListener('click', () => {
    // Reload the page to reset the state
    location.reload();
});
