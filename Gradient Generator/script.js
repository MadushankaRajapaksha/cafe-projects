const startColorInput = document.getElementById('start-color');
const endColorInput = document.getElementById('end-color');
const stepsInput = document.getElementById('steps');
const generateBtn = document.getElementById('generate-btn');
const gradientPreview = document.querySelector('.gradient-preview');

function generateGradient() {
  const startColor = startColorInput.value;
  const endColor = endColorInput.value;
  const steps = parseInt(stepsInput.value);

  const gradient = [];
  for (let i = 0; i < steps; i++) {
    const r = Math.round(parseInt(startColor.slice(1, 3), 16) + (parseInt(endColor.slice(1, 3), 16) - parseInt(startColor.slice(1, 3), 16)) * (i / (steps - 1)));
    const g = Math.round(parseInt(startColor.slice(3, 5), 16) + (parseInt(endColor.slice(3, 5), 16) - parseInt(startColor.slice(3, 5), 16)) * (i / (steps - 1)));
    const b = Math.round(parseInt(startColor.slice(5, 7), 16) + (parseInt(endColor.slice(5, 7), 16) - parseInt(startColor.slice(5, 7), 16)) * (i / (steps - 1)));
    gradient.push(`rgb(${r}, ${g}, ${b})`);
  }

  gradientPreview.style.background = `linear-gradient(to right, ${gradient.join(', ')})`;
}

generateBtn.addEventListener('click', generateGradient);
