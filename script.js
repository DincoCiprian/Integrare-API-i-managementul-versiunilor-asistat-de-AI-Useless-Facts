// =========================
// Selectarea elementelor din DOM
// =========================
const factText = document.getElementById("fact-text");
const generateFactBtn = document.getElementById("generate-fact-btn");
const errorMessage = document.getElementById("error-message");

// =========================
// Mesaj la pornirea aplicației
// =========================
console.log("Aplicația a pornit");

// =========================
// Funcție asincronă pentru preluarea unui useless fact
// =========================
async function fetchUselessFact() {
    console.log("Cerere către API trimisă");

    // Ascundem mesajul de eroare la fiecare cerere nouă
    errorMessage.hidden = true;

    try {
        const response = await fetch(
            "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en"
        );

        // Verificăm dacă răspunsul este valid
        if (!response.ok) {
            throw new Error("Răspuns invalid de la server");
        }

        const data = await response.json();

        console.log("Fact primit cu succes");

        // Afișăm factul în card
        factText.textContent = data.text;

    } catch (error) {
        console.log("Eroare la preluarea factului");
        console.error(error);

        // Afișăm mesaj de eroare în UI
        errorMessage.hidden = false;
        errorMessage.textContent =
            "Nu am putut încărca un fact inutil. Încearcă din nou 😕";
    }
}

// =========================
// Event listener pentru buton
// =========================
generateFactBtn.addEventListener("click", fetchUselessFact);