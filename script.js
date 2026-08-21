// --- Game Data Aligned to On-Level 8th Grade Unit 1 Reading Skills (15 Questions) ---
const GAME_DATA = [
  // --- MONITORING COMPREHENSION (Q1 - Q4) ---
  {
    level: 1,
    title: "LV.1 — Fix the Confusion (Q1)",
    passage: "Paragraphs 1–2:\nI was not a tall girl. At sixteen, I was barely five feet three inches. That did not work in my favor at the Baskin-Robbins in Park Forest, Illinois. In order to get the smooth, hard ice cream out of the tubs in the freezer, I had to open the glass display case and lean down inside.\n\nOnce my head was in, I used one arm to brace myself on the edge of the freezer while, with the other arm, I gathered enough strength to violently jam the metal scoop into the vat of ice cream. The violent jamming was important... When I had only one foot on the floor, barely balancing on my toes, that skim would send me flying forward...",
    question: "After reading paragraphs 1-2, a student is confused about what the narrator is doing while scooping the ice cream. As they reread the passage they should—",
    options: [
      "make a prediction about what will happen next",
      "picture the actions described",
      "look up the word 'violent' in the dictionary",
      "skip ahead to the next paragraph"
    ],
    correct: 1,
    correctRationale: "Great reading move! Visualizing (picturing) the physical actions—leaning in, bracing with one arm, balancing on toes—helps bring the confusing scene into focus.",
    incorrectRationale: "Not quite. Making a prediction (A), looking up a single word (C), or skipping ahead (D) won't help clarify physical movement. Visualizing the actions helps you picture what is happening."
  },
  {
    level: 2,
    title: "LV.1 — Fix the Confusion (Q2)",
    passage: "Paragraph 6:\nBut there was this tiny denim miniskirt, with buttons up the front... It. Was. Fierce. Tiny denim mini was beautiful. Tiny denim mini was everything to me.",
    question: "After paragraph 6, a reader is unsure why the author includes the details about the denim miniskirt. Which question would help the reader better understand?",
    options: [
      "What does a denim miniskirt look like?",
      "What is the price of the denim miniskirt?",
      "Why does the skirt have buttons in the front?",
      "Why is the skirt important to the narrator?"
    ],
    correct: 3,
    correctRationale: "Spot on! Asking why the skirt matters to the narrator helps connect her deep desire for it to her decision to get a summer job.",
    incorrectRationale: "Think about author's purpose. Questions about appearance (A), price (B), or buttons (C) focus on minor details rather than understanding why the skirt motivates the entire story."
  },
  {
    level: 3,
    title: "LV.1 — Fix the Confusion (Q3)",
    passage: "Paragraph 16:\nI never bought the denim mini. Turns out that minimum wage doesn't go all that far. I also never ate much ice cream after that. But I learned responsibility. I learned to keep my word. I learned, no matter how hard it is, to keep scooping until the job is done.",
    question: "After finishing the text, a student understands what happened but is not sure what the narrator learned. What should the student do?",
    options: [
      "Skim the beginning of the text to recall who the narrator is",
      "Reread the last paragraph and think about how the narrator changed",
      "Look up unfamiliar words about jobs such as minimum wage",
      "Highlight parts of the story when the mom tried to teach something"
    ],
    correct: 1,
    correctRationale: "Excellent adjustment! The concluding paragraph directly reflects on the story's overall lesson and how the narrator grew from her experience.",
    incorrectRationale: "Remember where takeaways live. The beginning of the story (A), vocabulary definitions (C), or mom's actions (D) won't summarize her personal lesson. The last paragraph explicitly states her growth."
  },
  {
    level: 4,
    title: "LV.1 — Fix the Confusion (Q4)",
    passage: "Paragraph 11:\nI went home to face my mother, defiant. She laughed. Then she told me that, now that I'd committed to a job, I wasn't allowed to quit. 'You picked a hard row to hoe,' she said, and went back to her chess game.",
    question: "While reading paragraph 11, a reader is confused about why the mother laughs instead of arguing. Which adjustment strategy would best help the reader understand the mother's reaction?",
    options: [
      "Annotating the mother's comment in paragraph 11 to show she knows the narrator has accidentally traded her freedom for a difficult summer job.",
      "Re-reading paragraph 4 to visualize the different flavors of ice cream that the narrator had to wash out of her hair.",
      "Asking a question about why the narrator chose a job at an ice cream shop instead of the hospital where she volunteered.",
      "Using background knowledge about chess to recognize that the mother is treating the argument like a game."
    ],
    correct: 0,
    correctRationale: "Bullseye! Annotating the mother's comment shows she recognizes the irony: her daughter got a grueling job thinking it meant 'freedom,' but now has to stick with it.",
    incorrectRationale: "Consider what the mother realizes. Paragraph 4 details (B), hospital questions (C), or chess trivia (D) don't address why she laughs. Annotating her quote reveals she knows her daughter walked into a hard lesson."
  },

  // --- SENTENCE STRUCTURE (Q5) ---
  {
    level: 5,
    title: "LV.5 — Sentence Sort (Q5)",
    passage: "Excerpts from the text:\n- 'Submerged in ice cream up to my elbows.'\n- 'One hand in the Cookies 'n Cream.'\n- 'Wanting to win.'\n- 'I did it for the denim mini.'",
    question: "After reading the passage, a student annotates to identify complete sentences and fragments. Which of the following is a complete sentence?",
    options: [
      "'Submerged in ice cream up to my elbows.'",
      "'One hand in the Cookies 'n Cream.'",
      "'Wanting to win.'",
      "'I did it for the denim mini.'"
    ],
    correct: 3,
    correctRationale: "You got it! 'I did it for the denim mini' has both a subject ('I') and a verb ('did') that form a complete thought.",
    incorrectRationale: "Check for subjects and main verbs. Options A, B, and C are all descriptive fragments lacking full subject-verb structures. Option D is a complete sentence."
  },

  // --- VOCABULARY & CONTEXT CLUES (Q6 - Q10) ---
  {
    level: 6,
    title: "LV.2 — Word Detective (Q6)",
    passage: "Paragraphs 8 & 10:\nWanting to live, I returned the denim mini. And then, wanting to win, I walked over to Baskin-Robbins and, with all my honor-student charm, talked the manager into giving me a job...\n\nParagraph 10: I let a miniskirt propel me into the workforce.",
    question: "In paragraph 10, the word propel is used. What does propel most nearly mean as it is used in the text?",
    options: [
      "To carefully consider a decision",
      "To avoid responsibility",
      "To push or drive forward",
      "To change direction"
    ],
    correct: 2,
    correctRationale: "Right on! The desire for the miniskirt pushed or drove the narrator directly into taking action and getting a job.",
    incorrectRationale: "Look at what happened. The skirt caused her to immediately walk over and get hired. It pushed/drove her forward (C), rather than causing her to hesitate or avoid action."
  },
  {
    level: 7,
    title: "LV.2 — Word Detective (Q7)",
    passage: "Context from Paragraphs 8–10:\nParagraph 8: '...I walked over to Baskin-Robbins and, with all my honor-student charm, talked the manager into giving me a job.'\nParagraph 10: 'I let a miniskirt propel me into the workforce.'",
    question: "Which detail BEST helps the reader understand the meaning of propel?",
    options: [
      "'I walked over to Baskin-Robbins and talked the manager into giving me a job.'",
      "'I returned the denim mini'",
      "'I came home covered in Butter Pecan and announced to my mother that she could not make me keep working.'",
      "'I was dumb enough to think I knew more than my mother'"
    ],
    correct: 0,
    correctRationale: "Perfect evidence! Taking immediate action to get hired illustrates the driving force (propel) created by wanting the skirt.",
    incorrectRationale: "Option A shows the direct action caused by the push. Options B, C, and D describe returning items, complaining, or reflecting on her mother."
  },
  {
    level: 8,
    title: "LV.2 — Word Detective (Q8)",
    passage: "Paragraph 7 & 11:\nParagraph 7: 'When she insisted that it be returned, I—newly immersed into the worlds of Janet Jackson and Madonna—refused.'\nParagraph 8: '...wanting to win...'\nParagraph 11: 'I went home to face my mother, defiant.'\nParagraph 13: '...announced to my mother that she could not make me keep working.'",
    question: "In paragraph 11, the narrator describes her attitude as defiant. Which group of phrases from the surrounding text serves as the best context clues to help the reader understand the meaning of defiant?",
    options: [
      "'honor-student charm,' 'Employee of the Month,' and 'smiled at strangers'",
      "'refused,' 'wanting to win,' and 'could not make me'",
      "'violent jamming,' 'hard row to hoe,' and 'keep scooping'",
      "'returned the denim mini,' 'forty dollars,' and 'minimum wage'"
    ],
    correct: 1,
    correctRationale: "Awesome job! Words like 'refused,' 'wanting to win,' and 'could not make me' show an attitude of resistance and rebellion (defiant).",
    incorrectRationale: "Look for bold, resistant behavior. Option A shows positive workplace behavior, Option C shows physical labor, and Option D lists money facts. Option B directly shows resistance."
  },
  {
    level: 9,
    title: "LV.3 — Dictionary Dash (Q9)",
    passage: "Paragraph 15:\nIt was my first job. I felt gritty; I felt real. There were time sheets and shifts and a manager and a uniform. I got Employee of the Month.\n\nDictionary Entry:\ngritty (adjective)\n1. containing small rough particles\n2. showing courage and determination\n3. unpleasantly dirty or messy\n4. having a rough texture",
    question: "As it is used in paragraph 15, which definition BEST matches the meaning of gritty?",
    options: [
      "definition 1",
      "definition 2",
      "definition 3",
      "definition 4"
    ],
    correct: 1,
    correctRationale: "Spot on! Feeling 'gritty' alongside feeling 'real' and earning Employee of the Month means showing determination, toughness, and work ethic.",
    incorrectRationale: "Look at the context of pride and hard work. Definitions 1, 3, and 4 describe rough dirt or unpleasant textures. In this context, it means showing determination and courage (Definition 2)."
  },
  {
    level: 10,
    title: "LV.2 — Word Detective (Q10)",
    passage: "Paragraph 4:\nThat's the curse of the job—ice cream everywhere. My uniform's pink-brown-and-white striped shirt was crisp, cheerful, but by the end of each shift it was gummy and streaked with chocolate and pistachio and sorbet and mint chip.",
    question: "In paragraph 4, the author describes her uniform as 'gummy and streaked with chocolate...' What does the word gummy most nearly mean as it is used in the paragraph?",
    options: [
      "sticky and messy",
      "bright and colorful",
      "soft and comfortable",
      "clean and smooth"
    ],
    correct: 0,
    correctRationale: "Great work! Melted ice cream drying on a shirt creates a sticky, messy residue.",
    incorrectRationale: "Think about melted ice cream on fabric. Dried, streaked ice cream makes clothing sticky and messy (A), not soft, bright, or clean."
  },

  // --- KEY IDEA & DETAILS (Q11 - Q15) ---
  {
    level: 11,
    title: "LV.4 — Evidence Hunt (Q11)",
    passage: "Passage Overview:\nThe narrator gets a hard job scooping ice cream to buy a miniskirt. Even though she never gets the skirt, she stays all summer, learns work ethic, and keeps her word.",
    question: "Which sentence BEST states the main idea of the passage?",
    options: [
      "Working at an ice cream shop is more difficult than it seems",
      "Teenagers should earn their own money for clothing",
      "A summer job teaches responsibility and commitment",
      "Parents should allow teenagers more independence"
    ],
    correct: 2,
    correctRationale: "Bingo! The entire passage focuses on how a challenging summer job ultimately taught the narrator responsibility, persistence, and commitment.",
    incorrectRationale: "Identify the overarching takeaway. Options A, B, and D focus on minor opinions or specific plot details. Option C captures the central theme of the entire memoir."
  },
  {
    level: 12,
    title: "LV.4 — Evidence Hunt (Q12)",
    passage: "Paragraphs 1–4:\n- 'I used one arm to brace myself... gathered enough strength to violently jam the metal scoop...'\n- 'When I had only one foot on the floor... send me flying forward...'\n- 'Submerged in ice cream up to my elbows.'\n- '...by the end of each shift it was gummy and streaked...'",
    question: "Which detail from paragraphs 1-4 BEST supports the idea that the narrator's job was challenging?",
    options: [
      "She had to lean into the freezer to reach the ice cream",
      "She fell into tubs of ice cream while scooping",
      "Her uniform was colorful and cheerful",
      "She worked at a popular ice cream shop"
    ],
    correct: 1,
    correctRationale: "You got it! Physically losing balance and landing elbow-deep in cold tubs of ice cream strongly demonstrates how challenging the work was.",
    incorrectRationale: "Look for direct evidence of hardship. Leaning in (A) is routine, while uniform colors (C) and store popularity (D) aren't challenges. Falling into vats (B) directly shows physical struggle."
  },
  {
    level: 13,
    title: "LV.4 — Evidence Hunt (Q13)",
    passage: "Paragraph 9:\nI would like to say that I didn't do it for the denim mini. I would like to say that I did it for the freedom... I would like to say that I did it for the power... The thing is, though, when you boil it down: I did it for the denim mini.",
    question: "What is the main idea of paragraph 9?",
    options: [
      "The narrator explains her decision in a more impressive way than the truth",
      "The narrator is unsure why she decided to get a job in the first place",
      "The narrator believes her job will give her independence and power",
      "The narrator realizes she took the job because she wanted the denim miniskirt"
    ],
    correct: 3,
    correctRationale: "Spot on! Despite all the noble motives she could invent ('freedom', 'power'), the honest truth was simply that she wanted the skirt.",
    incorrectRationale: "Read the final sentence of paragraph 9. She explicitly admits that when you 'boil it down,' her primary motive was simply wanting the denim mini (D)."
  },
  {
    level: 14,
    title: "LV.4 — Evidence Hunt (Q14)",
    passage: "Key Themes & Events:\nThe narrator seeks independence from her mother by getting a job, but quickly discovers the intense physical pain, messy shifts, and hard labor involved in earning her own way.",
    question: "Which detail from the story BEST supports the key idea that independence often comes with unexpected challenges?",
    options: [
      "The narrator uses her 'honor-student charm' to convince the manager to hire her on the spot.",
      "The narrator realizes that her mother will no longer dictate what she wears once she has her own income.",
      "The narrator discovers that scooping ice cream involves 'violent jamming' and falling into vats of Cookies 'n Cream.",
      "The narrator feels getting a job is 'real' because she learns about time sheets and a professional uniform."
    ],
    correct: 2,
    correctRationale: "Perfect selection! Expecting financial independence turned out to mean physical struggle, 'violent jamming,' and falling into vats of ice cream.",
    incorrectRationale: "Look for an unexpected challenge. Getting hired (A), knowing rules (B), and learning time sheets (D) are standard. Experiencing violent jamming and falling into vats (C) highlights unexpected difficulty."
  },
  {
    level: 15,
    title: "LV.4 — Evidence Hunt (Q15)",
    passage: "Narrator's Actions vs. Mother's Traits:\n- Narrator took initiative, got hired, tracked time sheets, worked all summer, and kept her word.\n- Mother insisted on rules, laughed at the defiance, and set strict expectations.",
    question: "Which detail LEAST supports the idea that the narrator is responsible?",
    options: [
      "The narrator's mother was very strict; she would not buy just anything her daughter wanted.",
      "Working at the ice cream shop forced the narrator to learn professional expectations like time sheets and uniform.",
      "The narrator took initiative to hunt for a job and convince the manager to hire her on the spot.",
      "Though each work day ended with ice cream everywhere, the narrator continues working at the shop throughout the summer."
    ],
    correct: 0,
    correctRationale: "Correct! The mother's strict parenting style describes the *mother*, not the *narrator's* personal responsibility.",
    incorrectRationale: "Be careful with 'LEAST'! Options B, C, and D all describe actions taken by the narrator showing responsibility. Option A describes the mother's strictness, not the narrator."
  }
];

let currentLevelIndex = 0;
let score = 0;
let lives = 7; // Updated to 7 lives
let timer = null;
let timeLeft = 120; // Updated to 2 minutes (120 seconds)

// --- DOM Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start-btn');
  if (startBtn) {
    startBtn.addEventListener('click', startGame);
  }
});

function startGame() {
  const startScreen = document.getElementById('start-screen');
  if (startScreen) {
    startScreen.style.display = 'none';
  }
  
  currentLevelIndex = 0;
  score = 0;
  lives = 7; // Reset to 7 lives at start
  loadQuestion();
}

function loadQuestion() {
  const container = document.getElementById('game-container');
  if (!container) return;

  if (currentLevelIndex >= GAME_DATA.length) {
    showEndScreen(true);
    return;
  }

  const data = GAME_DATA[currentLevelIndex];
  timeLeft = 120; // Reset timer to 120s for each question

  container.innerHTML = `
    <!-- HUD -->
    <div class="cq-hud">
      <div class="cq-hud-item">
        <i data-lucide="heart" style="color:#FF6FA0;"></i> Lives: ${'❤️'.repeat(lives)}
      </div>
      <div class="cq-hud-item">
        <i data-lucide="trophy" style="color:#FFC857;"></i> Score: ${score}
      </div>
      <div class="cq-hud-item">
        <i data-lucide="clock" style="color:#5CE7DE;"></i> Time: <span id="timer-display">120s</span>
      </div>
    </div>

    <!-- Level Header -->
    <div class="cq-level-head">
      <h2>${data.title}</h2>
      <span>Question ${currentLevelIndex + 1} of ${GAME_DATA.length}</span>
    </div>

    <!-- Passage Box -->
    <div class="cq-passage">
      <h3>Reading Passage / Text Snippet</h3>
      <p style="white-space: pre-line;">${data.passage}</p>
    </div>

    <!-- Question Card -->
    <div class="cq-card">
      <p class="cq-question">${data.question}</p>
      <div class="cq-options">
        ${data.options.map((opt, idx) => `
          <button class="cq-opt" onclick="selectOption(${idx})">
            <span class="cq-opt-letter">${String.fromCharCode(65 + idx)}.</span>
            <span>${opt}</span>
          </button>
        `).join('')}
      </div>
      <div id="feedback-area"></div>
    </div>
  `;

  if (window.lucide) {
    lucide.createIcons();
  }

  startTimer();
}

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    const timerDisplay = document.getElementById('timer-display');
    if (timerDisplay) {
      timerDisplay.innerText = `${timeLeft}s`;
    }

    if (timeLeft <= 0) {
      clearInterval(timer);
      handleTimeout();
    }
  }, 1000);
}

function selectOption(selectedIndex) {
  clearInterval(timer);
  const data = GAME_DATA[currentLevelIndex];
  const buttons = document.querySelectorAll('.cq-opt');
  const feedbackArea = document.getElementById('feedback-area');

  buttons.forEach(btn => btn.disabled = true);

  if (selectedIndex === data.correct) {
    score += 100 + timeLeft * 2;
    buttons[selectedIndex].classList.add('correct');
    feedbackArea.innerHTML = `
      <div class="cq-feedback correct">
        <div class="cq-feedback-head">✓ Correct Strategy!</div>
        <p><b>Why it works:</b> ${data.correctRationale}</p>
        <button class="cq-btn cq-next-btn" onclick="nextQuestion()">Next Question →</button>
      </div>
    `;
  } else {
    lives--;
    buttons[selectedIndex].classList.add('wrong');
    buttons[data.correct].classList.add('correct');

    const nextAction = lives <= 0 ? "showEndScreen(false)" : "nextQuestion()";
    const buttonText = lives <= 0 ? "View Results" : "Continue →";

    feedbackArea.innerHTML = `
      <div class="cq-feedback wrong">
        <div class="cq-feedback-head">✗ Strategy Check</div>
        <p><b>Rationale:</b> ${data.incorrectRationale}</p>
        <button class="cq-btn cq-next-btn" onclick="${nextAction}">${buttonText}</button>
      </div>
    `;
  }

  if (window.lucide) {
    lucide.createIcons();
  }
}

function handleTimeout() {
  lives--;
  const data = GAME_DATA[currentLevelIndex];
  const buttons = document.querySelectorAll('.cq-opt');
  const feedbackArea = document.getElementById('feedback-area');

  buttons.forEach(btn => btn.disabled = true);
  buttons[data.correct].classList.add('correct');

  const nextAction = lives <= 0 ? "showEndScreen(false)" : "nextQuestion()";
  const buttonText = lives <= 0 ? "View Results" : "Continue →";

  feedbackArea.innerHTML = `
    <div class="cq-feedback wrong">
      <div class="cq-feedback-head">⏰ Time's Up!</div>
      <p><b>Rationale:</b> ${data.incorrectRationale}</p>
      <button class="cq-btn cq-next-btn" onclick="${nextAction}">${buttonText}</button>
    </div>
  `;

  if (window.lucide) {
    lucide.createIcons();
  }
}

function nextQuestion() {
  currentLevelIndex++;
  loadQuestion();
}

function showEndScreen(won) {
  clearInterval(timer);
  const container = document.getElementById('game-container');
  if (!container) return;

  const title = won ? "QUEST COMPLETE!" : "GAME OVER";
  const sub = won 
    ? "You successfully mastered all 15 reading skill questions for Unit 1!" 
    : "You ran out of lives! Review your strategies and give it another try.";

  container.innerHTML = `
    <div class="cq-center">
      <h1 class="cq-title cq-pixel">${title}</h1>
      <p class="cq-sub">${sub}</p>
      
      <div class="cq-tier" style="margin-bottom: 20px;">
        Final Score: <b>${score} Points</b>
      </div>

      <!-- Post-Game Skill Reflection Module -->
      <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.15); border-radius: 12px; padding: 20px; text-align: left; max-width: 600px; margin: 0 auto 25px auto;">
        <h3 style="color: #5CE7DE; margin-top: 0; margin-bottom: 12px; font-size: 1.1rem;">
          🧠 Reading Skill Reflection Checklist
        </h3>
        <p style="font-size: 0.9rem; color: #ccc; margin-bottom: 15px;">Key moves for assessment success:</p>
        <ul style="font-size: 0.9rem; line-height: 1.6; color: #eee; padding-left: 20px; margin-bottom: 0;">
          <li><b>Monitor & Adjust:</b> Picture action scenes and reread concluding paragraphs to catch overarching lessons.</li>
          <li><b>Context Clues:</b> Look for behavioral descriptions (e.g., 'refused', 'wanting to win') to unlock word meanings.</li>
          <li><b>Dictionary Entry:</b> Match word senses to character traits (e.g., determination vs. rough texture).</li>
          <li><b>Key Idea & Evidence:</b> Distinguish between main thematic takeaways and minor supporting facts.</li>
          <li><b>Sentence Structure:</b> Look for complete thoughts containing both a subject and an active verb.</li>
        </ul>
      </div>

      <button class="cq-btn" onclick="location.reload()">
        Play Again 🔄
      </button>
    </div>
  `;
}
