import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  questions,
  calculateResult,
  computeScores,
  powerNames,
  type LetterChoice,
  type ResultType,
  type QuizOption,
} from '../lib/quizData';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Mock submission for static Vercel deployment if zitejs is not present
const submitQuiz = async (data: Record<string, unknown>) => {
  console.log('Quiz submitted:', data);
  return Promise.resolve({ success: true });
};

type AgeGroup = 'tween' | 'teen' | 'woman';

// ── helpers ──

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── sub-components ──

function OptionButton({
  text,
  selected,
  faded,
  onClick,
}: {
  text: string;
  selected: boolean;
  faded: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={faded || selected}
      className={cn(
        'w-full text-left px-5 py-4 rounded-xl border transition-all duration-300',
        'hover:border-primary/40 hover:bg-primary/5 hover:shadow-md',
        'focus:outline-none focus:ring-2 focus:ring-primary/30',
        'disabled:cursor-default',
        selected
          ? 'border-primary bg-primary/10 shadow-md scale-[1.02]'
          : faded
            ? 'border-border bg-card/50 opacity-60'
            : 'border-border bg-card/50'
      )}
    >
      <span className="text-sm sm:text-base leading-relaxed">{text}</span>
    </button>
  );
}

function ScoredQuestionCard({
  questionIndex,
  question,
  shuffledOptions,
  onAnswer,
}: {
  questionIndex: number;
  question: (typeof questions)[0];
  shuffledOptions: QuizOption[];
  onAnswer: (letter: LetterChoice) => void;
}) {
  const [selected, setSelected] = useState<LetterChoice | null>(null);

  const handleSelect = (letter: LetterChoice) => {
    if (selected) return;
    setSelected(letter);
    setTimeout(() => onAnswer(letter), 400);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <p className="text-[11px] italic text-muted-foreground/70 mb-4">
        Reminder: Answer for right now, not who you usually are.
      </p>
      <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
        Question {questionIndex + 1} of {questions.length}
      </p>
      <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground leading-snug mb-8">
        {question.question}
      </h2>
      <div className="space-y-3">
        {shuffledOptions.map((option, i) => (
          <OptionButton
            key={i}
            text={option.text}
            selected={selected === option.letter}
            faded={selected !== null && selected !== option.letter}
            onClick={() => handleSelect(option.letter)}
          />
        ))}
      </div>
    </div>
  );
}

function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="h-1 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${(current / total) * 100}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

function EmailCapture({
  onSubmit,
  isSubmitting,
}: {
  onSubmit: (email: string) => void;
  isSubmitting: boolean;
}) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    const trimmed = email.trim();
    if (!trimmed) {
      setError('Please enter your email');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Please enter a valid email');
      return;
    }
    setError('');
    onSubmit(trimmed);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg mx-auto text-center"
    >
      <div className="text-5xl mb-6">📬</div>
      <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-3">
        Almost there!
      </h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-8">
        Enter your email to receive your personalized result and weekly invitation.
      </p>
      <div className="mb-4">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError('');
          }}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          className="w-full max-w-xs mx-auto block px-5 py-3 rounded-xl border border-border bg-card/50 text-foreground text-center text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 placeholder:text-muted-foreground/60"
        />
        {error && <p className="text-xs text-destructive mt-2">{error}</p>}
      </div>
      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="px-10 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {isSubmitting ? 'Sending…' : 'See My Results'}
      </button>
    </motion.div>
  );
}

function ResultCard({
  result,
  name,
  onRetake,
}: {
  result: ResultType;
  name: string;
  onRetake: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full max-w-2xl mx-auto text-center"
    >
      <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">
        {name ? `${name}, your` : 'Your'} Body's Power Today
      </p>
      <div
        className={cn(
          'rounded-2xl p-8 sm:p-12 bg-gradient-to-br mb-8',
          result.color,
          'border border-border/50'
        )}
      >
        <div className="text-6xl sm:text-7xl mb-4">{result.emoji}</div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">
          {result.title}
        </h2>
        <p className="text-sm font-medium text-muted-foreground mb-1">{result.phase}</p>
        <p className="font-serif text-lg italic text-foreground/80 mt-4">{result.tagline}</p>
      </div>

      <div className="text-left space-y-6 px-2">
        <p className="text-base leading-relaxed text-foreground/85 whitespace-pre-line">
          {result.description}
        </p>

        <div className="bg-card rounded-xl p-5 border border-border/60">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
            Your Superpower
          </p>
          <p className="font-serif text-xl font-semibold text-foreground">{result.superpower}</p>
        </div>

        <div className="bg-card rounded-xl p-5 border border-border/60">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
            Your Invitation This Week
          </p>
          <p className="text-base leading-relaxed text-foreground/85 whitespace-pre-line">
            {result.invitation}
          </p>
        </div>
      </div>

      <p className="mt-6 text-xs text-muted-foreground/70 italic leading-relaxed max-w-md mx-auto">
        This is not a fixed personality result. Your power can change later today, next week, at
        another point in your cycle, or during another season of life.
      </p>

      <p className="mt-4 text-sm text-muted-foreground">
        ✉️ We've sent your full result to your inbox.
      </p>

      <button
        onClick={onRetake}
        className="mt-6 px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
      >
        Take the Quiz Again
      </button>

      <p className="mt-6 text-xs text-muted-foreground">by Nanorah</p>
    </motion.div>
  );
}

// ── energy context options by age group ──

const energyContextOptions: Record<AgeGroup, { question: string; options: string[] }> = {
  woman: {
    question: 'What is asking for most of your energy right now?',
    options: [
      'Building or leading something',
      'Career or work',
      'Motherhood or caregiving',
      'Balancing work + family',
      'Relationships',
      'A season of change or transition',
      'Honestly, everything',
    ],
  },
  teen: {
    question: 'What is taking up the most room in your world right now?',
    options: [
      'School and pressure',
      'Friendships and drama',
      'Family life',
      'Sports, activities, or performing',
      'My changing body',
      'Big feelings',
      'Honestly, everything.',
    ],
  },
  tween: {
    question: 'What feels the biggest in your life today?',
    options: [
      'School',
      'Friends',
      'Family',
      'Hobbies, sports, or play',
      'Changes in my body',
      'Big feelings',
      'Honestly, everything.',
    ],
  },
};

// ── main quiz ──

type QuizStep = 'landing' | 'ageGroup' | 'energyContext' | 'grounding' | 'scored' | 'email' | 'result';

export default function Quiz() {
  const [step, setStep] = useState<QuizStep>('landing');
  const [name, setName] = useState('');
  const [ageGroup, setAgeGroup] = useState<AgeGroup | null>(null);
  const [energyContext, setEnergyContext] = useState<string | null>(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, LetterChoice>>({});
  const [pendingResult, setPendingResult] = useState<ResultType | null>(null);
  const [result, setResult] = useState<ResultType | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const shuffledOptionsPerQuestion = useMemo(
    () => questions.map((q) => shuffle(q.options)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [step === 'scored' ? 'active' : 'inactive']
  );

  const handleScoredAnswer = useCallback(
    (letter: LetterChoice) => {
      const q = questions[currentQ];
      const newAnswers = { ...answers, [q.id]: letter };
      setAnswers(newAnswers);

      if (currentQ < questions.length - 1) {
        setCurrentQ((c) => c + 1);
      } else {
        const r = calculateResult(newAnswers);
        setPendingResult(r);
        setStep('email');
      }
    },
    [currentQ, answers]
  );

  const handleEmailSubmit = async (email: string) => {
    if (!pendingResult) return;
    setIsSubmitting(true);
    try {
      const scores = computeScores(answers);
      await submitQuiz({
        name,
        email,
        resultId: pendingResult.id as LetterChoice,
        ageGroup: ageGroup!,
        energyContext: energyContext!,
        q1Power: powerNames[answers['q1']],
        q2Power: powerNames[answers['q2']],
        q3Power: powerNames[answers['q3']],
        q4Power: powerNames[answers['q4']],
        q5Power: powerNames[answers['q5']],
        q6Power: powerNames[answers['q6']],
        sacredListeningScore: scores.A,
        playfulCreativityScore: scores.B,
        magneticManifestationScore: scores.C,
        regalDiscernmentScore: scores.D,
        emotionalAlchemyScore: scores.E,
        powerResetScore: scores.F,
      });
      setResult(pendingResult);
      setStep('result');
    } catch {
      toast.error('Something went wrong sending your email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const retake = () => {
    setStep('landing');
    setName('');
    setAgeGroup(null);
    setEnergyContext(null);
    setCurrentQ(0);
    setAnswers({});
    setPendingResult(null);
    setResult(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <AnimatePresence mode="wait">
        {step === 'landing' && (
          <LandingScreen key="landing" name={name} setName={setName} onStart={() => setStep('ageGroup')} />
        )}
        {step === 'ageGroup' && (
          <AgeGroupScreen
            key="age"
            onSelect={(ag) => {
              setAgeGroup(ag);
              setStep('energyContext');
            }}
          />
        )}
        {step === 'energyContext' && ageGroup && (
          <EnergyContextScreen
            key="energy"
            ageGroup={ageGroup}
            onSelect={(ec) => {
              setEnergyContext(ec);
              setStep('grounding');
            }}
          />
        )}
        {step === 'grounding' && (
          <GroundingScreen key="grounding" ageGroup={ageGroup!} onContinue={() => setStep('scored')} />
        )}
        {step === 'scored' && (
          <motion.div
            key={`scored-${currentQ}`}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <ProgressBar current={currentQ} total={questions.length} />
            <ScoredQuestionCard
              questionIndex={currentQ}
              question={questions[currentQ]}
              shuffledOptions={shuffledOptionsPerQuestion[currentQ]}
              onAnswer={handleScoredAnswer}
            />
          </motion.div>
        )}
        {step === 'email' && (
          <EmailCapture key="email" onSubmit={handleEmailSubmit} isSubmitting={isSubmitting} />
        )}
        {step === 'result' && result && (
          <ResultCard key="result" result={result} name={name} onRetake={retake} />
        )}
      </AnimatePresence>
    </div>
  );
}

// ── step screens ──

function LandingScreen({
  name,
  setName,
  onStart,
}: {
  name: string;
  setName: (v: string) => void;
  onStart: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg text-center"
    >
      <div className="text-5xl mb-6">✨</div>
      <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-2 leading-tight">
        The Five Feminine Powers™
      </h1>
      <p className="font-serif text-lg text-foreground/80 italic mb-6">
        Which power is asking to lead you today?
      </p>
      <p className="text-sm text-muted-foreground mb-2 italic">by Nanorah</p>
      <p className="text-base text-foreground/75 leading-relaxed mt-6 mb-2">
        Your body is constantly giving you information.
      </p>
      <p className="text-base text-foreground/75 leading-relaxed mb-2">
        This 2-minute check-in helps you identify which of your Five Feminine Powers™ may be asking
        for your attention right now, and what to do with that information.
      </p>
      <p className="text-sm text-muted-foreground/70 italic mb-8">
        This isn't a personality test. Your result can change as you change.
      </p>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full max-w-xs mx-auto block px-5 py-3 rounded-xl border border-border bg-card/50 text-foreground text-center text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 placeholder:text-muted-foreground/60"
        />
      </div>
      <button
        onClick={onStart}
        disabled={!name.trim()}
        className="px-10 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Take the Quiz · 2 min →
      </button>
    </motion.div>
  );
}

function AgeGroupScreen({ onSelect }: { onSelect: (ag: AgeGroup) => void }) {
  const [selected, setSelected] = useState<AgeGroup | null>(null);

  const handleSelect = (ag: AgeGroup) => {
    setSelected(ag);
    setTimeout(() => onSelect(ag), 350);
  };

  const options: { value: AgeGroup; label: string }[] = [
    { value: 'tween', label: 'Tween | 9–12' },
    { value: 'teen', label: 'Teen | 13–17' },
    { value: 'woman', label: 'Woman | 18+' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-lg mx-auto text-center"
    >
      <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground leading-snug mb-8">
        Who is checking in today?
      </h2>
      <div className="space-y-3">
        {options.map((o) => (
          <OptionButton
            key={o.value}
            text={o.label}
            selected={selected === o.value}
            faded={selected !== null && selected !== o.value}
            onClick={() => handleSelect(o.value)}
          />
        ))}
      </div>
    </motion.div>
  );
}

function EnergyContextScreen({
  ageGroup,
  onSelect,
}: {
  ageGroup: AgeGroup;
  onSelect: (ec: string) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const config = energyContextOptions[ageGroup];

  const handleSelect = (option: string) => {
    setSelected(option);
    setTimeout(() => onSelect(option), 350);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-lg mx-auto text-center"
    >
      <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground leading-snug mb-2">
        {config.question}
      </h2>
      {ageGroup === 'woman' && (
        <p className="text-sm text-muted-foreground mb-6">Choose the one that feels closest.</p>
      )}
      {ageGroup !== 'woman' && <div className="mb-6" />}
      <div className="space-y-3">
        {config.options.map((option) => (
          <OptionButton
            key={option}
            text={option}
            selected={selected === option}
            faded={selected !== null && selected !== option}
            onClick={() => handleSelect(option)}
          />
        ))}
      </div>
    </motion.div>
  );
}

function GroundingScreen({
  ageGroup,
  onContinue,
}: {
  ageGroup: AgeGroup;
  onContinue: () => void;
}) {
  const isWoman = ageGroup === 'woman';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg mx-auto text-center"
    >
      <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground leading-snug mb-6">
        Before you answer, come back to right now.
      </h2>
      <div className="text-base text-foreground/75 leading-relaxed space-y-4 mb-8">
        <p>Take one slow breath.</p>
        <p>Drop your shoulders.</p>
        <p>Unclench your jaw.</p>
        <p>Feel your feet on the ground.</p>
        {isWoman ? (
          <>
            <p className="mt-4">
              For the next two minutes, do not answer as who you usually are.
            </p>
            <p>
              Do not answer based on who you've been this year or what others expect of you.
            </p>
            <p>Answer strictly from today.</p>
            <p className="font-semibold italic">What feels true in your body in this exact hour?</p>
          </>
        ) : (
          <>
            <p className="mt-4">
              For the next two minutes, don't answer based on what you're usually like.
            </p>
            <p>Answer based on how you feel right now.</p>
          </>
        )}
      </div>
      <button
        onClick={onContinue}
        className="px-10 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
      >
        I'm here. Let's check in →
      </button>
    </motion.div>
  );
}
