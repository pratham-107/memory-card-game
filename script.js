const cards = document.querySelectorAll('.card');
const shuffleBtn = document.getElementById('shuffleBtn');

// Array representing the card faces with images
const cardFaces = [
  'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcnTqjOa91begQRCNmSu_z2E22s0x5YVZMXA&s)',
  'url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/51_Q_di_picche.jpg/145px-51_Q_di_picche.jpg)',
  'url(https://upload.wikimedia.org/wikipedia/commons/4/46/50_J_di_picche.jpg)',
  'url(https://i.etsystatic.com/27183291/r/il/a16f77/2927510475/il_1080xN.2927510475_asy7.jpg)'
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