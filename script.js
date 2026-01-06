const API_URL = 'https://uselessfacts.jsph.pl/random.json?language=en';

const factCard = document.getElementById('factCard');
const generateBtn = document.getElementById('generateBtn');
const errorBox = document.getElementById('error');

console.log('Aplicația a fost inițializată');

async function fetchUselessFact() {
  console.log('Cerere către API trimisă');

  try {
    showLoadingState();
    hideError();

    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Răspuns invalid de la API: ${response.status}`);
    }

    const data = await response.json();

    if (!data || !data.text) {
      throw new Error('Structură de răspuns neașteptată');
    }

    console.log('Fact primit cu succes');
    displayFact(data.text);

  } catch (error) {
    console.error('Eroare la preluarea factului', error);
    showError('Nu am putut prelua un useless fact. Încearcă din nou.');
  } finally {
    resetButtonState();
  }
}

function showLoadingState() {
  generateBtn.disabled = true;
  factCard.classList.add('loading');
  factCard.innerHTML = '<div class="spinner"></div>';
}

function resetButtonState() {
  generateBtn.disabled = false;
  factCard.classList.remove('loading');
}

function displayFact(text) {
  factCard.textContent = text;
}

function showError(message) {
  errorBox.textContent = message;
  errorBox.style.display = 'block';
  factCard.textContent = '⚠️ Eroare la încărcarea factului.';
}

function hideError() {
  errorBox.style.display = 'none';
}

generateBtn.addEventListener('click', fetchUselessFact);
