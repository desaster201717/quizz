// ============================================================
//  Quizz Pro – script.js
//  Benötigt: questions.js (liefert die globale QUESTIONS-Variable)
// ============================================================

// ---------- Konfiguration ----------
const TIMER_SECONDS = 10;      // Sekunden pro Frage
const NEXT_DELAY_MS = 1200;    // Auto-Weiter nach richtiger Antwort (ms)
const CIRCUMFERENCE = 2 * Math.PI * 26; // 163.4
const JSONBIN_BIN_ID = '69c52f3cc3097a1dd5614fda';
const JSONBIN_API_KEY = '$2a$10$tnWV4DXh8YcdttorcyL4nun1J83HLikAD0OU8R41xkeDPklNyVoMS';

// ---------- Spielzustand ----------
let questions = [];            // Gemischte Fragenreihenfolge
let currentIndex = 0;
let score = 0;
let lives = 3;
let countCorrect = 0;
let countWrong = 0;
let countTimeout = 0;
let timerInterval = null;
let timeLeft = TIMER_SECONDS;
let answered = false;
let playerName = '';
let currentShuffledAnswers = []; // Speichert die gemischten Antworten der aktuellen Frage
let gameMode = 'random';       // Aktueller Spielmodus

// ---------- Sound Manager (Web Audio API) ----------
class SoundManager {
    constructor() {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }

    play(type) {
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);

        const now = this.ctx.currentTime;

        switch (type) {
            case 'correct':
                osc.type = 'sine';
                osc.frequency.setValueAtTime(523.25, now); // C5
                osc.frequency.exponentialRampToValueAtTime(880, now + 0.1); // A5
                gain.gain.setValueAtTime(0, now);
                gain.gain.linearRampToValueAtTime(0.2, now + 0.05);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
                osc.start(now);
                osc.stop(now + 0.3);
                break;
            case 'wrong':
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(220, now); // A3
                osc.frequency.linearRampToValueAtTime(110, now + 0.2); // A2
                gain.gain.setValueAtTime(0, now);
                gain.gain.linearRampToValueAtTime(0.15, now + 0.05);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
                osc.start(now);
                osc.stop(now + 0.4);
                break;
            case 'timeout':
                osc.type = 'square';
                osc.frequency.setValueAtTime(150, now);
                gain.gain.setValueAtTime(0, now);
                gain.gain.linearRampToValueAtTime(0.1, now + 0.05);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
                osc.start(now);
                osc.stop(now + 0.5);
                break;
            case 'click':
                osc.type = 'sine';
                osc.frequency.setValueAtTime(800, now);
                gain.gain.setValueAtTime(0, now);
                gain.gain.linearRampToValueAtTime(0.1, now + 0.01);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
                osc.start(now);
                osc.stop(now + 0.1);
                break;
            case 'gameover':
                osc.type = 'sine';
                [440, 349, 293, 220].forEach((f, i) => {
                    const start = now + i * 0.15;
                    const o = this.ctx.createOscillator();
                    const g = this.ctx.createGain();
                    o.type = 'sine';
                    o.frequency.setValueAtTime(f, start);
                    o.connect(g);
                    g.connect(this.ctx.destination);
                    g.gain.setValueAtTime(0, start);
                    g.gain.linearRampToValueAtTime(0.1, start + 0.05);
                    g.gain.exponentialRampToValueAtTime(0.01, start + 0.3);
                    o.start(start);
                    o.stop(start + 0.3);
                });
                break;
        }
    }
}
const sounds = new SoundManager();

// ---------- DOM-Referenzen ----------
const screenStart = document.getElementById('screen-start');
const screenGame = document.getElementById('screen-game');
const screenResult = document.getElementById('screen-result');
const screenHighscore = document.getElementById('screen-highscore');
const screenLose = document.getElementById('screen-lose');

const nameInput = document.getElementById('player-name');
const highscoreContainer = document.getElementById('highscore-list');

const scoreEl = document.getElementById('score');
const livesEl = document.getElementById('lives-display');
const timerText = document.getElementById('timer-text');
const timerCircle = document.getElementById('timer-circle');
const answeredCount = document.getElementById('answered-count');
const categoryBadge = document.getElementById('category-badge');
const questionText = document.getElementById('question-text');
const answerBtns = document.querySelectorAll('.answer-btn');
const feedbackBar = document.getElementById('feedback-bar');
const feedbackText = document.getElementById('feedback-text');

// ---------- Hilfsfunktionen ----------

/** Blendet alle Screens aus, aktiviert den gewünschten */
function showScreen(screen) {
    [screenStart, screenGame, screenResult, screenHighscore, screenLose].forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

/** Fisher-Yates Shuffle für zufällige Fragenreihenfolge */
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

/** Kategorie anhand der neuen category-Property bestimmen */
function getCategory(index) {
    const q = questions[index];
    if (q && q.category) {
        return q.category;
    }
    return '❓ Allgemein';
}

/** Score animieren (nur noch für korrekte Antworten) */
function animateScore() {
    scoreEl.classList.remove('score-up');
    void scoreEl.offsetWidth;
    scoreEl.classList.add('score-up');
    setTimeout(() => scoreEl.classList.remove('score-up'), 450);
}

/** Leben-Anzeige aktualisieren */
function updateLivesUI() {
    if (lives > 5) {
        // Bei sehr vielen Leben (durch Cheat) zeigen wir Text statt 10 Herzen
        livesEl.textContent = `❤️ x ${lives}`;
    } else {
        const hearts = ['❤️', '❤️', '❤️'];
        for (let i = lives; i < 3; i++) hearts[i] = '🖤';
        // Falls wir zw. 4 und 5 Leben haben (durch andere Spielmodi/Cheats)
        const extraHearts = lives > 3 ? '❤️'.repeat(lives - 3) : '';
        livesEl.textContent = extraHearts + hearts.join(' ');
    }

    if (lives === 1) livesEl.classList.add('lives-critical');
    else livesEl.classList.remove('lives-critical');
}

/** Cheat Code / Leben hinzufügen */
function addLivesPrompt() {
    const code = prompt("Leben hinzufügen – bitte Code eingeben:");
    if (code === "0800") {
        lives = 10;
        updateLivesUI();
        alert("🎁 Cheat aktiviert! Du hast jetzt 10 Leben.");
    } else if (code !== null) {
        alert("❌ Falscher Code!");
    }
}

// ---------- Timer ----------

function startTimer() {
    timeLeft = TIMER_SECONDS;
    updateTimerUI();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerUI();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeout();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function updateTimerUI() {
    timerText.textContent = timeLeft;
    const ratio = timeLeft / TIMER_SECONDS;
    const offset = CIRCUMFERENCE * (1 - ratio);
    timerCircle.style.strokeDashoffset = offset;

    // Dringlichkeit ab 10 Sekunden
    if (timeLeft <= 10) {
        timerCircle.classList.add('urgent');
    } else {
        timerCircle.classList.remove('urgent');
    }
}

// ---------- Spielablauf ----------

function startGame(mode = 'random') {
    sounds.play('click');
    gameMode = mode;
    playerName = nameInput.value.trim();
    if (!playerName) {
        alert('Bitte gib deinen Namen ein, um zu spielen!');
        nameInput.focus();
        return;
    }

    // Spielstand zurücksetzen
    if (gameMode === 'random') {
        questions = shuffle(QUESTIONS);
    } else {
        // Falls später andere Modi kommen
        questions = shuffle(QUESTIONS);
    }
    currentIndex = 0;
    score = 0;
    lives = 3;
    countCorrect = 0;
    countWrong = 0;
    countTimeout = 0;

    scoreEl.textContent = '0';
    updateLivesUI();

    showScreen(screenGame);
    loadQuestion();
}

function loadQuestion() {
    answered = false;
    feedbackBar.classList.remove('visible');

    // Antwort-Buttons zurücksetzen
    answerBtns.forEach(btn => {
        btn.classList.remove('correct', 'wrong');
        btn.disabled = false;
        btn.style.opacity = '1';
    });

    const q = questions[currentIndex];

    // Antworten vorbereiten und mischen
    const answerObjects = q.answers.map((text, index) => ({
        text: text,
        isCorrect: index === q.correct
    }));
    currentShuffledAnswers = shuffle(answerObjects);

    // Kategorie & Frage befüllen
    categoryBadge.textContent = getCategory(currentIndex);
    questionText.textContent = q.question;

    // Antworten befüllen (auch mit A/B/C/D Prefix)
    const prefixes = ['A', 'B', 'C', 'D'];
    answerBtns.forEach((btn, i) => {
        btn.textContent = `${prefixes[i]}  ${currentShuffledAnswers[i].text}`;
    });

    // Fortschritt (Beantwortet)
    answeredCount.textContent = currentIndex;

    startTimer();
}

function checkAnswer(selectedIndex) {
    if (answered) return;
    answered = true;
    stopTimer();

    const correctIndex = currentShuffledAnswers.findIndex(a => a.isCorrect);

    if (currentShuffledAnswers[selectedIndex].isCorrect) {
        // ✅ RICHTIG
        sounds.play('correct');
        answerBtns[selectedIndex].classList.add('correct');
        score++;
        countCorrect++;
        animateScore();
        scoreEl.textContent = score;
        feedbackText.textContent = '✅ Richtig! Weiter so!';
        showFeedback();
        // Auto-Weiter entfernt auf User-Wunsch
    } else {
        // ❌ FALSCH – Leben abziehen
        sounds.play('wrong');
        answerBtns[selectedIndex].classList.add('wrong');
        answerBtns[correctIndex].classList.add('correct');
        lives--;
        countWrong++;
        updateLivesUI();
        feedbackText.textContent = `❌ Leider falsch! Die richtige Antwort ist: ${answerBtns[correctIndex].textContent.slice(3)}`;
        showFeedback();
    }

    disableAllButtons();

    // Game Over wenn keine Leben mehr
    if (lives <= 0) {
        setTimeout(() => showLoseScreen(), 1000);
    }
}

function handleTimeout() {
    if (answered) return;
    answered = true;
    sounds.play('timeout');

    const correctIndex = currentShuffledAnswers.findIndex(a => a.isCorrect);
    answerBtns[correctIndex].classList.add('correct');
    lives--;
    countTimeout++;
    updateLivesUI();
    feedbackText.textContent = `⏰ Zeit abgelaufen! Richtig wäre: ${answerBtns[correctIndex].textContent.slice(3)}`;

    disableAllButtons();
    showFeedback();

    // Game Over wenn keine Leben mehr
    if (lives <= 0) {
        setTimeout(() => showLoseScreen(), 1000);
    }
}

function disableAllButtons() {
    answerBtns.forEach(btn => {
        btn.disabled = true;
        if (!btn.classList.contains('correct') && !btn.classList.contains('wrong')) {
            btn.style.opacity = '0.45';
        }
    });
}

function showFeedback() {
    feedbackBar.classList.add('visible');
}

function nextQuestion() {
    sounds.play('click');
    if (lives <= 0) return; // Sicherheitshalber abbrechen
    currentIndex++;
    if (currentIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// ---------- Game Over / Highscore Logic ----------

function showLoseScreen() {
    stopTimer();
    sounds.play('gameover');
    document.getElementById('lose-score').textContent = score;
    showScreen(screenLose);
    uploadScore(score);
}

// ---------- Ergebnis ----------

function showResult() {
    stopTimer();

    const total = questions.length;
    // Score Anzeige
    document.getElementById('result-score').textContent = score;

    let emoji, title, subtitle;
    if (score >= total * 0.8) {
        emoji = '🏆'; title = 'Grandios!'; subtitle = 'Du bist ein echtes Quiz-Genie!';
    } else if (score >= total * 0.5) {
        emoji = '🎉'; title = 'Super gemacht!'; subtitle = 'Tolles Ergebnis – du weißt eine Menge!';
    } else if (score >= 0) {
        emoji = '😊'; title = 'Nicht schlecht!'; subtitle = 'Beim nächsten Mal wird\'s noch besser!';
    } else {
        emoji = '😅'; title = 'Das war knapp…'; subtitle = 'Üben macht den Meister – versuch es nochmal!';
    }

    document.getElementById('result-emoji').textContent = emoji;
    document.getElementById('result-title').textContent = title;
    document.getElementById('result-subtitle').textContent = subtitle;

    // Mini-Statistiken
    document.getElementById('result-stats').innerHTML = `
        <div class="stat-chip chip-correct">
            <span class="stat-chip-val">${countCorrect}</span>
            <span class="stat-chip-lbl">Richtig</span>
        </div>
        <div class="stat-chip chip-wrong">
            <span class="stat-chip-val">${countWrong}</span>
            <span class="stat-chip-lbl">Falsch</span>
        </div>
        <div class="stat-chip chip-time">
            <span class="stat-chip-val">${countTimeout}</span>
            <span class="stat-chip-lbl">Timeout</span>
        </div>
    `;

    showScreen(screenResult);
    uploadScore(score);
}

// ---------- Cloud Highscore (JSONBin.io) ----------

async function uploadScore(finalScore) {
    try {
        // 1. Aktuelle Liste holen
        const getResponse = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}/latest`, {
            headers: { 'X-Master-Key': JSONBIN_API_KEY }
        });
        const getResult = await getResponse.json();
        let list = Array.isArray(getResult.record) ? getResult.record : [];

        // 2. Neuen Score hinzufügen
        list.push({ name: playerName, score: finalScore });

        // 3. Sortieren und Top 10 behalten
        list.sort((a, b) => b.score - a.score);
        list = list.slice(0, 10);

        // 4. Liste speichern
        await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': JSONBIN_API_KEY
            },
            body: JSON.stringify(list)
        });
    } catch (err) {
        console.error('Highscore Upload failed:', err);
    }
}

async function showHighscores() {
    sounds.play('click');
    showScreen(screenHighscore);
    highscoreContainer.innerHTML = '<div class="loader-spinner">Lade Top 10...</div>';

    try {
        const response = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}/latest`, {
            headers: { 'X-Master-Key': JSONBIN_API_KEY, 'X-Bin-Meta': 'false' }
        });
        const list = await response.json();

        if (!Array.isArray(list) || list.length === 0) {
            highscoreContainer.innerHTML = '<p>Noch keine Einträge vorhanden.</p>';
            return;
        }

        let html = '<table class="hs-table"><thead><tr><th>#</th><th>Spieler</th><th>Punkte</th></tr></thead><tbody>';
        list.forEach((entry, idx) => {
            const isCurrent = (entry.name === playerName && idx < 10); // Simpler Highlight-Check
            html += `<tr class="${isCurrent ? 'row-highlight' : ''}">
                <td>${idx + 1}</td>
                <td>${entry.name}</td>
                <td>${entry.score}</td>
            </tr>`;
        });
        html += '</tbody></table>';
        highscoreContainer.innerHTML = html;

    } catch (err) {
        highscoreContainer.innerHTML = '<p style="color:var(--wrong)">Fehler beim Laden der Liste.</p>';
    }
}

function restartGame() {
    startGame();
}