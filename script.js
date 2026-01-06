// =========================
// Selectarea elementelor din DOM
// =========================
const factText = document.getElementById("fact-text");
const previousFactText = document.getElementById("previous-fact-text");
const generateFactBtn = document.getElementById("generate-fact-btn");
const errorMessage = document.getElementById("error-message");

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

        if (!response.ok) {
            throw new Error("Răspuns invalid de la server");
        }

        const data = await response.json();
        console.log("Fact primit cu succes");

        // Mutăm factul curent în secțiunea "ultimul fact"
        const currentFact = factText.textContent;
        if (currentFact && currentFact !== "Apasă butonul pentru a genera un fact inutil 🤓") {
            previousFactText.textContent = currentFact;
        }

        // Afișăm noul fact în cardul principal
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

// ==========================
// Funcție pentru actualizarea datei și timpului
// ==========================
function updateDateTime() {
    const now = new Date();
    const datetimeElement = document.getElementById('datetime');
    datetimeElement.textContent = `Data și timp: ${now.toLocaleString('ro-RO')}`;
}

// Actualizare inițială
updateDateTime();

// Actualizare la fiecare secundă
setInterval(updateDateTime, 1000);
