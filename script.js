// --- Game Data Aligned to On-Level Practice Packet (16 Questions) ---
const GAME_DATA = [
  // --- LEVEL 1 — MONITORING COMPREHENSION (Q1 - Q3) ---
  {
    level: 1,
    title: "LV.1 — Fix the Confusion (Q1)",
    passage: "POEM: Learning to Bake\nMy aunt taught herself to bake the way she learned to hope —\nmix, stir, wait, breathe, wait, breathe—\nWhen you hover by the oven door she gives you a look that asks,\nWho told you good things happen fast?",
    question: "A reader is confused by the final line of the poem: 'Who told you good things happen fast?' What should they do to understand why the aunt asks this question?",
    options: [
      "Reread the lines about 'hovering by the oven door' to notice the speaker is impatient.",
      "Look up the history of baking ovens to see how long they take to heat.",
      "Predict what dessert the aunt will bake next.",
      "Count how many times the poem repeats the word 'wait.'"
    ],
    correct: 0,
    correctRationale: "Great strategy! Rereading the context around hovering by the oven door shows that the speaker is being impatient while waiting for the food to bake.",
    incorrectRationale: "Think about why someone hovering at the oven door gets questioned. Looking up oven history (B), predicting recipes (C), or counting words (D) doesn't explain the character's impatience."
  },
  {
    level: 1,
    title: "LV.1 — Fix the Confusion (Q2)",
    passage: "POEM: Learning to Bake\nMy aunt taught herself to bake the way she learned to hope —\nmix, stir, wait, breathe, wait, breathe—",
    question: "A student thinks 'wait, breathe, wait, breathe' means the aunt is panicking. What strategy helps fix this misunderstanding?",
    options: [
      "Look up 'breathe' in a medical dictionary.",
      "Reread the stanza and notice how the repetition shows patience, not fear.",
      "Ask a friend whether they enjoy baking.",
      "Skip ahead to see if the aunt burns the cake."
    ],
    correct: 1,
    correctRationale: "Spot on! Noticing how the rhythm and repetition mimic a calm, steady baking process shows patience rather than panic.",
    incorrectRationale: "Look at the overall tone. A medical dictionary (A), personal opinions (C), or checking for burnt cakes (D) don't explain the calm rhythm of 'wait, breathe.'"
  },
  {
    level: 1,
    title: "LV.1 — Fix the Confusion (Q3)",
    passage: "POEM: Learning to Bake\nMy aunt taught herself to bake the way she learned to hope —\nmix, stir, wait, breathe, wait, breathe—\nWhen you hover by the oven door she gives you a look that asks,\nWho told you good things happen fast?",
    question: "A reader doesn’t understand how baking connects to 'learning to hope.' What should they do?",
    options: [
      "Reread the ending to see how waiting becomes a metaphor for hope.",
      "Look up 'hope' in the dictionary.",
      "Visualize a kitchen to picture where the aunt is standing.",
      "Skim the poem quickly to find rhyming words."
    ],
    correct: 0,
    correctRationale: "Bullseye! Rereading the connection between waiting for baked goods and waiting for good things in life clarifies how baking serves as a metaphor for hope.",
    incorrectRationale: "Think about thematic connections. Dictionary definitions (B), visual details (C), or rhyming words (D) won't explain the deeper figurative connection between waiting and hope."
  },

  // --- LEVEL 2 — VOCABULARY IN CONTEXT (Q4 - Q7) ---
  {
    level: 2,
    title: "LV.2 — Word Detective (Q4)",
    passage: "Paragraph 2:\nThe moment I dipped the brush into the paint bucket, thick white paint dripped down the handle and onto my wrist. I wiped it off, annoyed, and swiped the brush across the fence in one long streak. The paint splattered everywhere — on the grass, on my shoes, and on the neighbor’s mailbox. Mr. Alvarez sighed the kind of sigh that said, This is going to be a long summer.",
    question: "In paragraph 2 of My Summer Painting Fences, what does 'splattered' most nearly mean?",
    options: [
      "gently landed",
      "scattered messily",
      "dried instantly",
      "disappeared completely"
    ],
    correct: 1,
    correctRationale: "Right on! The paint flew all over the grass, shoes, and mailbox, which shows it scattered messily.",
    incorrectRationale: "Look at where the paint ended up—grass, shoes, mailbox! That shows a messy scatter (B) rather than landing gently, drying, or disappearing."
  },
  {
    level: 2,
    title: "LV.2 — Word Detective (Q5)",
    passage: "Paragraph 2:\n...I wiped it off, annoyed, and swiped the brush across the fence in one long streak. The paint splattered everywhere — on the grass, on my shoes, and on the neighbor’s mailbox...",
    question: "Which detail BEST helps the reader understand the meaning of 'splattered'?",
    options: [
      "'thick white paint dripped down the handle'",
      "'I wiped it off, annoyed'",
      "'The paint splattered everywhere — on the grass, on my shoes, and on the neighbor’s mailbox'",
      "'Mr. Alvarez sighed'"
    ],
    correct: 2,
    correctRationale: "Perfect evidence! Listing all the places the paint landed (grass, shoes, mailbox) shows the messy scattering in action.",
    incorrectRationale: "Find the sentence that illustrates the word. Options A, B, and D describe paint on a wrist or reactions, whereas Option C directly shows the widespread mess."
  },
  {
    level: 2,
    title: "LV.2 — Word Detective (Q6)",
    passage: "Paragraph 3:\nBy the end of the first week, I had learned to paint without splattering. But it was still exhausting. The sun beat down on my back, and my arms ached from holding the brush steady. Every afternoon, I came home streaked with paint and smelling like sunscreen and sweat.",
    question: "In paragraph 3, what does 'ached' most nearly mean?",
    options: [
      "felt sore from effort",
      "grew stronger over time",
      "moved quickly",
      "became numb"
    ],
    correct: 0,
    correctRationale: "You got it! Holding a brush steady in the hot sun all day causes muscles to feel sore from effort.",
    incorrectRationale: "Think about physical fatigue. Exhausting work in the heat makes your arms sore (A), not fast, numb, or immediately stronger."
  },
  {
    level: 2,
    title: "LV.2 — Word Detective (Q7)",
    passage: "Paragraph 4:\nI didn’t need the job. My parents kept telling me to focus on summer reading instead. But there was this backpack — a forestgreen hiking pack with padded straps and a dozen pockets. I wanted it more than anything...",
    question: "In paragraph 4, what does 'forestgreen' most nearly describe?",
    options: [
      "the size of the backpack",
      "the color of the backpack",
      "the weight of the backpack",
      "the price of the backpack"
    ],
    correct: 1,
    correctRationale: "Awesome! 'Forestgreen' combines 'forest' and 'green' to describe the exact shade/color of the backpack.",
    incorrectRationale: "Break down the word! 'Green' is a color (B), not a size, weight, or dollar price."
  },

  // --- LEVEL 3 — KEY IDEA & SUPPORTING DETAILS (Q8 - Q12) ---
  {
    level: 3,
    title: "LV.3 — Key Idea & Details (Q8)",
    passage: "Passage Summary:\nAn impatient teenager takes a hard summer job painting fences to buy a backpack. Along the way, the narrator learns how to slow down, pay attention, and finish what they started.",
    question: "Which sentence BEST states the main idea of My Summer Painting Fences?",
    options: [
      "Painting fences is harder than it looks.",
      "A summer job can teach patience and responsibility.",
      "Teenagers should earn their own money.",
      "Backpacks are expensive and difficult to buy."
    ],
    correct: 1,
    correctRationale: "Bingo! The entire story focuses on how the hard work of painting fences taught the narrator patience and how to stick with a job.",
    incorrectRationale: "Look for the central lesson. Options A, C, and D mention specific details or opinions, but Option B captures the main growth of the narrator."
  },
  {
    level: 3,
    title: "LV.3 — Key Idea & Details (Q9)",
    passage: "Paragraph 3:\nBy the end of the first week, I had learned to paint without splattering. But it was still exhausting. The sun beat down on my back, and my arms ached from holding the brush steady...",
    question: "Which detail BEST supports the idea that the narrator’s job was challenging?",
    options: [
      "Paint dripped onto the narrator’s wrist.",
      "The narrator wanted a forestgreen backpack.",
      "The sun beat down and her arms ached from painting.",
      "Her friends biked past the yard."
    ],
    correct: 2,
    correctRationale: "Great choice! The beating sun and aching arms directly show the physical difficulty and challenge of the work.",
    incorrectRationale: "Focus on evidence of physical struggle. Minor accidents (A), wanting items (B), or watching friends (D) don't describe the hardship of the job like Option C does."
  },
  {
    level: 3,
    title: "LV.3 — Key Idea & Details (Q10)",
    passage: "Paragraph 5:\nSo I kept painting. Slowly. Carefully... By August, I had saved enough for the backpack. But somewhere along the way, I realized the backpack wasn’t really the point. I had learned how to slow down, pay attention, and finish what I started.",
    question: "What is the main idea of paragraph 5?",
    options: [
      "The narrator regrets taking the job.",
      "The narrator realizes she learned more than she expected.",
      "The narrator decides to quit painting fences.",
      "The narrator buys the backpack immediately."
    ],
    correct: 1,
    correctRationale: "Spot on! The narrator realizes that beyond just getting a backpack, the true value was learning life lessons in patience and focus.",
    incorrectRationale: "Read the concluding reflection. She doesn't regret the job or quit; she discovers that learning to slow down and finish tasks was the unexpected reward."
  },
  {
    level: 3,
    title: "LV.3 — Key Idea & Details (Q11)",
    passage: "Paragraphs 3 & 5:\n- 'The sun beat down on my back, and my arms ached...'\n- 'Even when the heat made my head spin. Even when my friends biked past...'",
    question: "Which detail BEST supports the idea that independence often comes with unexpected challenges?",
    options: [
      "The narrator asks her mom for money.",
      "The narrator’s friends want her to hang out.",
      "The narrator learns to paint slowly and carefully in the heat.",
      "The narrator chooses a backpack with padded straps."
    ],
    correct: 2,
    correctRationale: "Bullseye! Pushing through extreme heat and working slowly to earn her own way illustrates the hard realities of independence.",
    incorrectRationale: "Look for unexpected hardship during the process of earning independence. Option C details the grueling effort required to succeed on her own."
  },
  {
    level: 3,
    title: "LV.3 — Key Idea & Details (Q12)",
    passage: "Paragraph 1 vs. Paragraph 5:\n- Paragraph 1: 'I was not a patient person. At fourteen, I wanted everything done fast...'\n- Paragraph 5: 'So I kept painting... saved enough... finished what I started.'",
    question: "Which detail LEAST supports the idea that the narrator is responsible?",
    options: [
      "She wanted everything done fast.",
      "She kept painting even when it was exhausting.",
      "She saved money all summer.",
      "She finished the job even when her friends invited her to leave."
    ],
    correct: 0,
    correctRationale: "Correct! Wanting everything done fast shows her initial impatience, *not* responsible behavior.",
    incorrectRationale: "Pay close attention to 'LEAST'! Options B, C, and D show dedication, saving, and commitment (responsible traits). Option A shows her initial flaw."
  },

  // --- LEVEL 4 — SENTENCE SORT (Q13 - Q16) ---
  {
    level: 4,
    title: "LV.4 — Sentence Sort (Q13)",
    passage: "Item 13:\n'Balancing on my toes in the heat.'",
    question: "Determine whether the excerpt is a complete sentence or a fragment:\n\n'Balancing on my toes in the heat.'",
    options: [
      "Fragment",
      "Complete Sentence"
    ],
    correct: 0,
    correctRationale: "You got it! This is a fragment because it lacks a main subject and a finite verb expresssing a complete thought.",
    incorrectRationale: "Who is balancing? This participle phrase is missing a clear subject and predicate, making it a fragment (A)."
  },
  {
    level: 4,
    title: "LV.4 — Sentence Sort (Q14)",
    passage: "Item 14:\n'I wiped the paint off my wrist.'",
    question: "Determine whether the excerpt is a complete sentence or a fragment:\n\n'I wiped the paint off my wrist.'",
    options: [
      "Fragment",
      "Complete Sentence"
    ],
    correct: 1,
    correctRationale: "Spot on! 'I' is the subject, 'wiped' is the verb, and it expresses a complete thought.",
    incorrectRationale: "Check subject and verb: 'I' (subject) + 'wiped' (verb). This forms a complete sentence (B)."
  },
  {
    level: 4,
    title: "LV.4 — Sentence Sort (Q15)",
    passage: "Item 15:\n'One long streak across the fence.'",
    question: "Determine whether the excerpt is a complete sentence or a fragment:\n\n'One long streak across the fence.'",
    options: [
      "Fragment",
      "Complete Sentence"
    ],
    correct: 0,
    correctRationale: "Great eye! This is a fragment because there is no action verb showing what the streak is doing.",
    incorrectRationale: "Notice there is no action verb here. It's just a noun phrase, making it a fragment (A)."
  },
  {
    level: 4,
    title: "LV.4 — Sentence Sort (Q16)",
    passage: "Item 16:\n'I learned to slow down.'",
    question: "Determine whether the excerpt is a complete sentence or a fragment:\n\n'I learned to slow down.'",
    options: [
      "Fragment",
      "Complete Sentence"
    ],
    correct: 1,
    correctRationale: "Perfect! 'I' is the subject, 'learned' is the action verb, creating a full thought.",
    incorrectRationale: "This has a subject ('I') and a main verb ('learned'). It stands on its own as a complete sentence (B)."
  }
];

// --- GAME STATE VARIABLES ---
let currentQuestionIndex = 0;
let score = 0;
let lives = 7;
let streak = 0;
let timer = null;
let timeLeft = 120; // 2 minutes per question

// --- DOM ELEMENTS ---
const startScreen = document.getElementById('start-screen');
const gameContainer = document.getElementById('game-container');
const startBtn = document.getElementById('start-btn');

// --- EVENT LISTENERS ---
if (startBtn) {
  startBtn.addEventListener('click', startGame);
}

// --- GAME ENGINE FUNCTIONS ---

function startGame() {
  currentQuestionIndex = 0;
  score = 0;
  lives = 7;
  streak = 0;
  
  if (startScreen) startScreen.style.display = 'none';
  gameContainer.style.display = 'block';
  
  renderQuestion();
}

function startTimer() {
  clearInterval(timer);
  timeLeft = 120;
  
  timer = setInterval(() => {
    timeLeft--;
    const timerDisplay = document.getElementById('timer-count');
    if (timerDisplay) {
      const mins = Math.floor(timeLeft / 60);
      const secs = timeLeft % 60;
      timerDisplay.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    if (timeLeft <= 0) {
      clearInterval(timer);
      handleTimeout();
    }
  }, 1000);
}

function renderQuestion() {
  const data = GAME_DATA[currentQuestionIndex];
  const optionLetters = ['A', 'B', 'C', 'D'];

  const html = `
    <div class="cq-hud">
      <div class="cq-hud-item"><i data-lucide="heart" style="color: var(--accent-pink);"></i> Lives: ${lives}</div>
      <div class="cq-hud-item"><i data-lucide="clock" style="color: var(--accent-cyan);"></i> Time: <span id="timer-count">2:00</span></div>
      <div class="cq-hud-item"><i data-lucide="trophy" style="color: var(--accent-gold);"></i> Score: ${score}</div>
    </div>

    <div class="cq-passage">
      <h3>Context / Passage Excerpt</h3>
      <p>${data.passage.replace(/\n/g, '<br>')}</p>
    </div>

    <div class="cq-card">
      <div class="cq-level-head">
        <h2>${data.title}</h2>
        <span>Question ${currentQuestionIndex + 1} of ${GAME_DATA.length}</span>
      </div>

      <p class="cq-question">${data.question}</p>

      <div class="cq-options">
        ${data.options.map((opt, i) => `
          <button class="cq-opt" onclick="selectAnswer(${i})">
            <span class="cq-opt-letter">${optionLetters[i]}.</span>
            <span>${opt}</span>
          </button>
        `).join('')}
      </div>

      <div id="feedback-area"></div>
    </div>
  `;

  gameContainer.innerHTML = html;
  
  // Re-initialize dynamic Lucide icons for hearts/clocks
  if (window.lucide) lucide.createIcons();
  
  startTimer();
}

function selectAnswer(selectedIndex) {
  clearInterval(timer);
  const data = GAME_DATA[currentQuestionIndex];
  const buttons = document.querySelectorAll('.cq-opt');
  const feedbackArea = document.getElementById('feedback-area');
  
  buttons.forEach(btn => btn.disabled = true);

  if (selectedIndex === data.correct) {
    buttons[selectedIndex].classList.add('correct');
    streak++;
    const bonus = streak > 1 ? streak * 50 : 0;
    const earned = 100 + bonus;
    score += earned;

    feedbackArea.innerHTML = `
      <div class="cq-feedback correct">
        <div class="cq-feedback-head">Correct! (+${earned} pts)</div>
        <p>${data.correctRationale}</p>
        <button class="cq-btn cq-next-btn" onclick="nextQuestion()">Next Question</button>
      </div>
    `;
  } else {
    buttons[selectedIndex].classList.add('wrong');
    buttons[data.correct].classList.add('correct');
    streak = 0;
    lives--;

    feedbackArea.innerHTML = `
      <div class="cq-feedback wrong">
        <div class="cq-feedback-head">Incorrect (-1 Life)</div>
        <p>${data.incorrectRationale}</p>
        <button class="cq-btn cq-next-btn" onclick="nextQuestion()">Next Question</button>
      </div>
    `;
  }
}

function handleTimeout() {
  const data = GAME_DATA[currentQuestionIndex];
  const buttons = document.querySelectorAll('.cq-opt');
  const feedbackArea = document.getElementById('feedback-area');

  buttons.forEach(btn => btn.disabled = true);
  buttons[data.correct].classList.add('correct');
  
  streak = 0;
  lives--;

  feedbackArea.innerHTML = `
    <div class="cq-feedback wrong">
      <div class="cq-feedback-head">Time's Up! (-1 Life)</div>
      <p>${data.incorrectRationale}</p>
      <button class="cq-btn cq-next-btn" onclick="nextQuestion()">Next Question</button>
    </div>
  `;
}

function nextQuestion() {
  if (lives <= 0) {
    renderEndScreen(false);
    return;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex >= GAME_DATA.length) {
    renderEndScreen(true);
  } else {
    renderQuestion();
  }
}

function renderEndScreen(won) {
  clearInterval(timer);
  
  const endHtml = `
    <div class="cq-center">
      <h1 class="cq-title">${won ? 'QUEST COMPLETED!' : 'GAME OVER'}</h1>
      <p class="cq-sub">${won ? 'You successfully mastered all 16 reading skill questions!' : 'You ran out of lives! Review your strategies and try again.'}</p>
      <div class="cq-tier" style="margin-bottom: 20px;">Final Score: <b>${score}</b> pts</div>
      <button class="cq-btn" onclick="startGame()">Play Again</button>
    </div>
  `;

  gameContainer.innerHTML = endHtml;
}
