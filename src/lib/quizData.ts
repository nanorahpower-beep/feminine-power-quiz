export type LetterChoice = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

export interface QuizOption {
  letter: LetterChoice;
  text: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question:
      'If you had one free hour today with zero demands, what does your body want?',
    options: [
      { letter: 'A', text: 'Silence and zero input. I need to hear myself.' },
      { letter: 'B', text: 'To follow whatever feels interesting, no plan.' },
      { letter: 'C', text: 'Something beautiful, pleasurable, or alive.' },
      { letter: 'D', text: 'To get one thing off my plate for good, or suddenly clean out a closet or inbox I\u2019ve been avoiding.' },
      { letter: 'E', text: 'Space to feel, cry, journal, or process.' },
      { letter: 'F', text: 'Pure rest. Scroll, nap, or stare at a wall.' },
    ],
  },
  {
    id: 'q2',
    question:
      'Look at what\u2019s on your plate. Where does your attention actually go?',
    options: [
      { letter: 'A', text: 'I need everything to stop so I can hear myself.' },
      { letter: 'B', text: 'Toward something more interesting than the list, and probably three new things I want to add to it.' },
      { letter: 'C', text: 'Toward the one thing I actually want to do, or how I\u2019m coming across while I do it.' },
      { letter: 'D', text: 'Half this list is unnecessary. I\u2019m ready to cut the fluff and close loops.' },
      { letter: 'E', text: 'Toward one person or feeling taking up all the room.' },
      { letter: 'F', text: 'Nowhere. Nothing is landing.' },
    ],
  },
  {
    id: 'q3',
    question:
      'What does your body want from the people already in your day?',
    options: [
      { letter: 'A', text: 'Less contact. I want to be with myself, even if that means being short with whoever doesn\u2019t take the hint.' },
      { letter: 'B', text: 'Someone to laugh with or be spontaneous with.' },
      { letter: 'C', text: 'To move toward someone I genuinely want closeness with.' },
      { letter: 'D', text: 'Clarity on who\u2019s a yes and who\u2019s a no today.' },
      { letter: 'E', text: 'To acknowledge what I\u2019m still feeling about someone or something that happened between us.' },
      { letter: 'F', text: 'No one. Even being needed feels like too much.' },
    ],
  },
  {
    id: 'q4',
    question:
      'Bring up a real, unresolved decision or idea. Don\u2019t solve it. Where does your attention go first?',
    options: [
      { letter: 'A', text: 'Toward quiet, away from everyone\u2019s opinions.' },
      { letter: 'B', text: 'Toward exploring options, not deciding yet.' },
      { letter: 'C', text: 'Toward what I actually want and what feels alive.' },
      { letter: 'D', text: 'Toward sorting: clear yes, clear no.' },
      { letter: 'E', text: 'Toward what each option brings up emotionally.' },
      { letter: 'F', text: 'Toward another search, another list, no decision at all.' },
    ],
  },
  {
    id: 'q5',
    question:
      'Think of the strongest feeling you\u2019ve noticed in the last few hours. What does your body want to do with it?',
    options: [
      { letter: 'A', text: 'Get quiet enough to hear what it\u2019s telling me.' },
      { letter: 'B', text: 'Move the energy. Dance, music, movement, change the scene.' },
      { letter: 'C', text: 'Move toward something that feels nourishing, pleasurable, or alive.' },
      { letter: 'D', text: 'Understand what it\u2019s showing me needs to change.' },
      { letter: 'E', text: 'Actually feel it, or snap at whoever\u2019s nearby so everyone just backs off.' },
      { letter: 'F', text: 'Not deal with it right now. I need less intensity.' },
    ],
  },
  {
    id: 'q6',
    question:
      'One sentence your body would interrupt you with right now:',
    options: [
      { letter: 'A', text: '\u201CPlease get quiet. I have something to tell you.\u201D' },
      { letter: 'B', text: '\u201CWait. What if we tried this?\u201D' },
      { letter: 'C', text: '\u201CI want that. Let\u2019s go toward it.\u201D' },
      { letter: 'D', text: '\u201CThat\u2019s a yes. That\u2019s a no. Stop negotiating.\u201D' },
      { letter: 'E', text: '\u201CThis is affecting me. Let me feel it.\u201D' },
      { letter: 'F', text: '\u201CI cannot take one more thing right now.\u201D' },
    ],
  },
];

export const powerNames: Record<LetterChoice, string> = {
  A: 'Sacred Listening\u2122',
  B: 'Playful Creativity\u2122',
  C: 'Magnetic Manifestation\u2122',
  D: 'Regal Discernment\u2122',
  E: 'Emotional Alchemy\u2122',
  F: 'Power Reset',
};

export interface ResultType {
  id: string;
  title: string;
  emoji: string;
  phase: string;
  tagline: string;
  description: string;
  superpower: string;
  invitation: string;
  color: string;
}

export const results: Record<string, ResultType> = {
  A: {
    id: 'A',
    title: 'Sacred Listening\u2122',
    emoji: '\u{1F319}',
    phase: 'Your Nanorah Compass is pointing inward',
    tagline: 'Your power is in the pause.',
    description:
      `You\u2019re tapped into the power that knows how to trust your voice in the void more than all the voices outside of you.\n\nBut you may be consulting the outside world before consulting your inner one.\n\nCheck your inbox. Your power practice is waiting for you.`,
    superpower: 'Intuition & Inner Knowing',
    invitation:
      `Leave one thing unfinished. On purpose.\n\nUse that white space to ask:\n\n\u201CWhat do I need to know right now?\u201D\n\nDon\u2019t force an answer. Just listen.`,
    color: 'from-indigo-900/20 via-slate-800/10 to-purple-900/20',
  },
  B: {
    id: 'B',
    title: 'Playful Creativity\u2122',
    emoji: '\u{1F331}',
    phase: 'Your Nanorah Compass is pointing toward possibility',
    tagline: 'Your power is in the spark.',
    description:
      `You're tapped into your Playful Creativity power. Your energy is rising, ideas are bubbling, and curiosity is leading the way. You're not scattered \u2014 you're gathering possibilities. Play isn't what happens after the important work is done. Play may be how the important work gets born.`,
    superpower: 'Creativity & Curiosity',
    invitation:
      'Follow one completely unnecessary playful impulse today. Dance, doodle, say the silly thing. Do not ask it to be useful. Let the pleasure itself be enough.',
    color: 'from-emerald-500/20 via-lime-400/10 to-teal-500/20',
  },
  C: {
    id: 'C',
    title: 'Magnetic Manifestation\u2122',
    emoji: '\u2600\uFE0F',
    phase: 'Your Nanorah Compass is pointing outward',
    tagline: 'Your power is in your presence.',
    description:
      `You're tapped into your Magnetic Manifestation power. Your body is moving toward the world \u2014 ready to speak, lead, and be seen. You're not too much. Visibility does not require performance. The difference is: "Please choose me" vs. "I'm choosing to show up."`,
    superpower: 'Magnetism & Visibility',
    invitation:
      'Take one bold, imperfect action today. Then stop. No unnecessary follow-up. Let your action be enough.',
    color: 'from-amber-400/20 via-orange-300/10 to-rose-400/20',
  },
  D: {
    id: 'D',
    title: 'Regal Discernment\u2122',
    emoji: '\u{1F342}',
    phase: 'Your Nanorah Compass is pointing toward refinement',
    tagline: 'Your power is in your clarity.',
    description:
      `You're tapped into your Regal Discernment power. Your tolerance is lower and your attention sharper \u2014 and that's not a flaw. Your irritation is the distance between what you know and what you're still tolerating. The Queen doesn't say yes to every request that arrives at the gates. She decides.`,
    superpower: 'Focus & Truth-Telling',
    invitation:
      `Finish this sentence: "If I weren't afraid of disappointing anyone, I would ______." One clean truth is enough.`,
    color: 'from-orange-600/20 via-amber-700/10 to-red-800/20',
  },
  E: {
    id: 'E',
    title: 'Emotional Alchemy\u2122',
    emoji: '\u{1F525}',
    phase: 'Your Nanorah Compass is pointing toward transformation',
    tagline: 'Your power is in what you feel.',
    description:
      `You're tapped into your Emotional Alchemy power. What you're feeling isn't overreaction \u2014 it's information arriving with force. The way through isn't another explanation. It's letting your body finish experiencing it. You don't need to suppress yourself in order to feel powerful.`,
    superpower: 'Emotional Intelligence & Boundaries',
    invitation:
      `The next time a big emotion rises, don't explain it yet. Put your hand where you feel it. Express, explore, pause, integrate. Let your body settle before deciding what happens next.`,
    color: 'from-rose-600/20 via-fuchsia-500/10 to-red-600/20',
  },
  F: {
    id: 'F',
    title: 'Power Reset',
    emoji: '\u{1F300}',
    phase: 'Your Nanorah Compass is showing a Power Blend',
    tagline: 'Your body is speaking in full sentences.',
    description:
      `No single power is asking to lead right now \u2014 and that isn't a bad result. Your Five Feminine Powers were never meant to become another rigid system. They are a language. And sometimes your body speaks in full sentences. Ask: what kind of power would support me most right now?`,
    superpower: 'Alignment & Responsiveness',
    invitation:
      `Put one hand on your body and ask: Do I need to receive, create, attract, discern, or transform? Notice which creates the strongest response. Choose one tiny action that honors that need today.`,
    color: 'from-violet-500/20 via-amber-400/10 to-rose-400/20',
  },
};

// Tiebreaker questions in priority order
const tiebreakerQuestions = ['q6', 'q4', 'q1'];

export function calculateResult(answers: Record<string, LetterChoice>): ResultType {
  const counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };

  Object.values(answers).forEach((letter) => {
    if (counts[letter] !== undefined) {
      counts[letter]++;
    }
  });

  // Step 1: If F is selected 3 or more times → Power Reset
  if (counts['F'] >= 3) {
    return results['F'];
  }

  // Step 2: Ignore F, count only A–E
  const coreKeys = ['A', 'B', 'C', 'D', 'E'] as const;
  const maxCount = Math.max(...coreKeys.map((k) => counts[k]));
  const winners = coreKeys.filter((k) => counts[k] === maxCount);

  // Unique highest wins
  if (winners.length === 1) {
    return results[winners[0]];
  }

  // Tiebreaker: Q6, then Q4, then Q1
  for (const qId of tiebreakerQuestions) {
    const answer = answers[qId];
    if (answer && answer !== 'F' && winners.includes(answer as typeof coreKeys[number])) {
      return results[answer];
    }
  }

  // Fallback (should be extremely rare) — first tied letter
  return results[winners[0]];
}

/** Compute score counts for analytics */
export function computeScores(answers: Record<string, LetterChoice>): Record<LetterChoice, number> {
  const counts: Record<LetterChoice, number> = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };
  Object.values(answers).forEach((letter) => {
    counts[letter]++;
  });
  return counts;
}
