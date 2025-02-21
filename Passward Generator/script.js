const lengthInput = document.getElementById('length');
const uppercaseCheckbox = document.getElementById('uppercase');
const numbersCheckbox = document.getElementById('numbers');
const specialCheckbox = document.getElementById('special');
const generateButton = document.getElementById('generate');
const passwordParagraph = document.getElementById('password');

generateButton.addEventListener('click', (e) => {
  e.preventDefault();
  const length = parseInt(lengthInput.value);
  const includeUppercase = uppercaseCheckbox.checked;
  const includeNumbers = numbersCheckbox.checked;
  const includeSpecial = specialCheckbox.checked;

  const characters = 'abcdefghijklmnopqrstuvwxyz';
  let password = '';

  if (includeUppercase) {
    password += getRandomCharacter('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  }
  if (includeNumbers) {
    password += getRandomCharacter('0123456789');
  }
  if (includeSpecial) {
    password += getRandomCharacter('!@#$%^&*()_+');
  }

  for (let i = 0; i < length - password.length; i++) {
    password += getRandomCharacter(characters);
  }

  if (includeUppercase) {
    password += getRandomCharacter('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  }
  if (includeNumbers) {
    password += getRandomCharacter('0123456789');
  }
  if (includeSpecial) {
    password += getRandomCharacter('!@#$%^&*()_+');
  }

  password = shuffleString(password);

  passwordParagraph.textContent = password;
});

function getRandomCharacter(characters) {
  return characters.charAt(Math.floor(Math.random() * characters.length));
}

function shuffleString(str) {
  let arr = str.split('');
  let n = arr.length;

  for(let i = n - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }

  return arr.join('');
}
