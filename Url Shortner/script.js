const urlInput = document.getElementById('url-input');
const shortenBtn = document.getElementById('shorten-btn');
const shortenedUrlElement = document.getElementById('shortened-url');

shortenBtn.addEventListener('click', async () => {
  const url = urlInput.value;
  try {
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const data = await response.json();
    if (data.ok) {
      shortenedUrlElement.textContent = data.result.short_link;
    } else {
      shortenedUrlElement.textContent = 'Error shortening URL';
    }
  } catch (error) {
    shortenedUrlElement.textContent = 'Error shortening URL';
    console.error(error);
  }
});
