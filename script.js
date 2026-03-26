// Variablen für den Spielstatus
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 300; // 5 Minuten in Sekunden
let isAnswered = false; // Verhindert mehrfaches Klicken

// HTML-Elemente in Variablen speichern, um sie leichter anzupassen
const questionEl = document.getElementById("question");
const answerBtns = document.querySelectorAll(".answer-btn");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const nextBtn = document.getElementById("next-btn");

// 1. Fragen aus der JSON-Datei laden
async function loadQuestions() {
    try {
        const response = await fetch('questions.json');
        questions = await response.json();
        showQuestion(); // Erste Frage anzeigen
    } catch (error) {
        questionEl.innerText = "Fehler beim Laden der Fragen. Hast du einen lokalen Server gestartet?";
        console.error(error);
    }
}

// 2. Aktuelle Frage und Antworten auf dem Bildschirm anzeigen
function showQuestion() {
    resetState(); // Alles auf Start zurücksetzen
    let currentQuestion = questions[currentQuestionIndex];
    questionEl.innerText = currentQuestion.question;

    // Text für die 4 Buttons setzen
    answerBtns.forEach((btn, index) => {
        btn.innerText = currentQuestion.answers[index];
        btn.disabled = false; // Buttons anklickbar machen
    });

    startTimer();
}

// 3. Den 5-Minuten-Timer starten
function startTimer() {
    timeLeft = 300;
    timeEl.innerText = timeLeft;

    // Zählt jede Sekunde (1000 Millisekunden) um 1 herunter
    timer = setInterval(() => {
        timeLeft--;
        timeEl.innerText = timeLeft;

        if (timeLeft <= 0) {
            handleTimeout(); // Zeit abgelaufen!
        }
    }, 1000);
}

// 4. Was passiert, wenn die Zeit abläuft?
function handleTimeout() {
    if (isAnswered) return; // Nichts tun, falls schon geantwortet wurde
    isAnswered = true;
    clearInterval(timer); // Timer stoppen

    // Punkt abziehen
    score--;
    scoreEl.innerText = score;

    // Richtige Antwort grün markieren
    let correctIndex = questions[currentQuestionIndex].correct;
    answerBtns[correctIndex].classList.add("correct");

    disableButtons();
}

// 5. Wird ausgeführt, wenn der Spieler auf eine Antwort klickt
function checkAnswer(selectedIndex) {
    if (isAnswered) return;
    isAnswered = true;
    clearInterval(timer); // Timer stoppen

    let correctIndex = questions[currentQuestionIndex].correct;

    if (selectedIndex === correctIndex) {
        // RICHTIG: Geklickten Button grün machen, Punkt dazu
        answerBtns[selectedIndex].classList.add("correct");
        score++;
    } else {
        // FALSCH: Geklickten Button rot machen, richtigen grün machen, Punkt weg
        answerBtns[selectedIndex].classList.add("wrong");
        answerBtns[correctIndex].classList.add("correct");
        score--;
    }

    scoreEl.innerText = score;
    disableButtons();
}

// 6. Buttons deaktivieren und "Nächste Frage"-Button anzeigen
function disableButtons() {
    answerBtns.forEach(btn => btn.disabled = true);
    nextBtn.classList.remove("hidden");
}

// 7. Alles für die nächste Frage bereinigen
function resetState() {
    isAnswered = false;
    clearInterval(timer);
    nextBtn.classList.add("hidden");
    answerBtns.forEach(btn => {
        btn.classList.remove("correct", "wrong"); // Farben entfernen
    });
}

// 8. Zur nächsten Frage wechseln oder Spiel beenden
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        // Wenn keine Fragen mehr da sind
        questionEl.innerText = "Quiz beendet! Dein finaler Score: " + score;
        document.querySelector('.answers-box').style.display = 'none';
        nextBtn.style.display = 'none';
        timeEl.parentElement.style.display = 'none';
    }
}

// Spiel starten, sobald das Skript geladen ist
loadQuestions();