const inputText = document.getElementById('input-text');
const generateBtn = document.getElementById('generate-btn');
const qrCodeContainer = document.getElementById('qr-code');

generateBtn.addEventListener('click', () => {
  const text = inputText.value.trim();
  if (text) {
    generateQRCode(text);
  }
});

function generateQRCode(text) {
  qrCodeContainer.innerHTML = '';

  const qrcode = new QRCode(qrCodeContainer, {
    text: text,
    width: 256,
    height: 256,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H
  });
}

// Include the QRCode.js library
const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js';
script.onload = () => {
  console.log('QRCode.js library loaded');
};
document.body.appendChild(script);
