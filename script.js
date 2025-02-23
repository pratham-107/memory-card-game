const cards = document.querySelectorAll('.card');
const shuffleBtn = document.getElementById('shuffleBtn');

// Array representing the card faces with images
const cardFaces = [
  'url(https://png.pngtree.com/png-clipart/20230812/original/pngtree-comic-speech-bubbles-with-text-you-win-picture-image_7880780.png)',
  'url(https://png.pngtree.com/png-clipart/20230812/original/pngtree-comic-speech-bubbles-with-text-you-win-picture-image_7880780.png)',
  'url(https://png.pngtree.com/png-clipart/20230812/original/pngtree-comic-speech-bubbles-with-text-you-win-picture-image_7880780.png)',
  'url(https://m.media-amazon.com/images/I/31mQ+Rx8nrL._UXNaN_FMjpg_QL85_.jpg)'
];

// Function to shuffle the cards
function shuffleCards() {
  // Add shuffling animation to cards
  cards.forEach(card => {
    card.classList.add('shuffling');
  });

  // Randomize the card faces after animation delay
  setTimeout(() => {
    // Ensure a new shuffle order every time
    let shuffledFaces;
    do {
      shuffledFaces = [...cardFaces].sort(() => Math.random() - 0.5);
    } while (shuffledFaces.every((face, index) => face === cards[index].dataset.cardFace));

    cards.forEach((card, index) => {
      card.style.backgroundImage = '';
      card.textContent = '?';
      card.classList.remove('hidden');
      card.dataset.cardFace = shuffledFaces[index];
      card.classList.remove('shuffling');
    });
  }, 500); // Match animation duration (0.5s)
}

// Function to handle card click
function revealCard(event) {
  const card = event.target;

  // Check if the card is already revealed
  if (card.classList.contains('hidden')) return;

  // Reveal the card face (image)
  card.style.backgroundImage = card.dataset.cardFace;
  card.textContent = '';
  card.classList.add('hidden');
}

// Add event listeners to the cards
cards.forEach(card => {
  card.addEventListener('click', revealCard);
});

// Add event listener to the shuffle button
shuffleBtn.addEventListener('click', shuffleCards);

// Initialize the game by shuffling cards
shuffleCards();
