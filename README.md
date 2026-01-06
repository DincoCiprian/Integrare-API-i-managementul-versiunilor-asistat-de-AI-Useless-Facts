# Useless Facts Generator

## Descriere

Această aplicație este un generator de „fapte inutile” amuzante și interesante. Printr-un simplu click, poți afla un fact aleatoriu care nu te ajută neapărat în viața de zi cu zi, dar îți poate aduce un zâmbet sau o curiozitate neașteptată 🤓.

---

## API folosit

Aplicația utilizează API-ul public **[Useless Facts API](https://uselessfacts.jsph.pl/)** pentru a prelua fapte aleatorii în limba engleză.  

- Endpoint principal folosit:  

- API-ul returnează un obiect JSON cu textul factului, care este afișat apoi în interfața web.

---

## Cum se folosește aplicația

1. Deschide aplicația în browser.
2. Vei vedea un card principal cu mesajul:  
 `"Apasă butonul pentru a genera un fact inutil 🤓"`.
3. Apasă pe butonul **„Generează un fact inutil”**.  
 - Factul curent va fi afișat în cardul principal.
 - Dacă există un fact afișat anterior, acesta va fi mutat automat în secțiunea **„Ultimul fact inutil”**.
4. Dacă apar probleme la încărcarea factului (de exemplu, API-ul nu răspunde), va apărea un mesaj de eroare vizibil sub carduri.

---

## Exemple de interacțiune

- **Buton principal:** „Generează un fact inutil” → afișează un fact aleatoriu.  
- **Secțiunea „Ultimul fact inutil”** → păstrează factul anterior pentru comparație sau amuzament.  
- **Mesaje de eroare** → se afișează doar dacă cererea către API eșuează.

---

## Tehnologii folosite

- HTML, CSS, JavaScript
- API extern: Useless Facts API

---

## Captură de ecran

![Exemplu de interfață](link-captura.png)  
*Card principal cu fact, buton de generare și secțiunea pentru ultimul fact.*

---

## Link GitHub

[Useless Facts Generator – Repository](https://github.com/username/useless-facts-generator)
