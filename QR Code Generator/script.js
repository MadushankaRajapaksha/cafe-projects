const grid = document.querySelector('.grid');
const generateButton = document.getElementById('generate');

function createGrid() {
  for (let i = 0; i < 16 * 16; i++) {
    const cell = document.createElement('div');
    cell.addEventListener('click', toggleColor);
    grid.appendChild(cell);
  }
}

function toggleColor(e) {
  e.target.classList.toggle('active');
}

function generatePixelArt() {
  const cells = grid.querySelectorAll('div');
  cells.forEach(cell => {
    cell.style.backgroundColor = cell.classList.contains('active') ? '#000' : '#fff';
  });
}

createGrid();

generateButton.addEventListener('click', generatePixelArt);
