/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  GraduationCap, 
  RotateCcw, 
  Eye, 
  ChevronRight, 
  Timer, 
  CheckCircle2, 
  XCircle, 
  Award,
  ArrowLeft
} from 'lucide-react';
import { IRREGULAR_VERBS, type Verb } from './data/verbs';

type Mode = 'home' | 'select-training' | 'training' | 'exam' | 'result';

export default function App() {
  const [mode, setMode] = useState<Mode>('home');
  const [examResult, setExamResult] = useState<{
    score: number;
    total: number;
    errors: { verb: Verb; answers: string[] }[];
  } | null>(null);
  const [trainingList, setTrainingList] = useState<Verb[]>(IRREGULAR_VERBS);

  const goToHome = () => setMode('home');
  const startExam = () => setMode('exam');
  
  const startTrainingSequence = (verbs: Verb[]) => {
    setTrainingList(verbs);
    setMode('training');
  };

  return (
    <div className="bg-slate-950 text-slate-100 font-sans h-screen w-full flex flex-col overflow-hidden selection:bg-indigo-500/30">
      <header className="h-16 border-b border-slate-800 flex items-center justify-between px-8 bg-slate-950/50 backdrop-blur-md shrink-0 z-50 relative">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={goToHome}
        >
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <h1 className="font-bold text-xl tracking-tight hidden sm:inline">
            Irregular<span className="text-indigo-400">Master</span>
          </h1>
        </div>
        {mode !== 'home' && (
          <button 
            onClick={goToHome}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline font-medium">Accueil</span>
          </button>
        )}
      </header>

      <main className="flex-1 flex overflow-y-auto w-full max-w-7xl mx-auto p-4 md:p-8">
        <div className="flex-1 flex flex-col w-full h-full relative">
        <AnimatePresence mode="wait">
          {mode === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex-1 flex flex-col items-center justify-center gap-12 w-full h-full"
            >
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                  Prêt à maîtriser l'anglais ?
                </h2>
                <p className="text-slate-400 text-lg max-w-md mx-auto">
                  Apprenez 40 verbes irréguliers essentiels avec feedback immédiat ou testez-vous en conditions réelles.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
                <button
                  id="btn-training"
                  onClick={() => setMode('select-training')}
                  className="group relative p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-indigo-500/50 hover:bg-slate-800/50 transition-all text-left overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                    <BookOpen className="w-24 h-24 text-indigo-500" />
                  </div>
                  <div className="relative z-10 space-y-4">
                    <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Mode Entraînement</h3>
                      <p className="text-slate-400 mt-2">Apprenez à votre rythme avec correction en temps réel pour chaque forme.</p>
                    </div>
                  </div>
                </button>

                <button
                  id="btn-exam"
                  onClick={startExam}
                  className="group relative p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all text-left overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                    <Timer className="w-24 h-24 text-cyan-500" />
                  </div>
                  <div className="relative z-10 space-y-4">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center">
                      <Timer className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Mode Examen</h3>
                      <p className="text-slate-400 mt-2">20 verbes, 5 minutes, pas d'aide. Le test ultime de vos connaissances.</p>
                    </div>
                  </div>
                </button>
              </div>
            </motion.div>
          )}

          {mode === 'select-training' && (
            <motion.div
              key="select-training"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex-1 flex flex-col items-center justify-center gap-8 w-full h-full max-w-4xl mx-auto"
            >
              <div className="text-center space-y-4 mb-4">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                  Choisissez une série
                </h2>
                <p className="text-slate-400">Entraînez-vous bout à bout ou par groupes de 10 verbes.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <button
                  onClick={() => startTrainingSequence(IRREGULAR_VERBS)}
                  className="p-6 bg-indigo-600/20 border border-indigo-500/50 rounded-2xl hover:bg-indigo-600/40 transition-colors text-center md:col-span-2"
                >
                  <h3 className="text-xl font-bold text-white mb-2">Tous les verbes</h3>
                  <p className="text-indigo-200/80 text-sm">Les {IRREGULAR_VERBS.length} verbes à la file</p>
                </button>
                {Array.from({ length: Math.ceil(IRREGULAR_VERBS.length / 10) }).map((_, i) => {
                  const start = i * 10;
                  const end = Math.min((i + 1) * 10, IRREGULAR_VERBS.length);
                  return (
                    <button
                      key={i}
                      onClick={() => startTrainingSequence(IRREGULAR_VERBS.slice(start, end))}
                      className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-indigo-500/50 hover:bg-slate-800/50 transition-all text-center"
                    >
                      <h3 className="text-xl font-bold text-white mb-2">Série {i + 1}</h3>
                      <p className="text-slate-400 text-sm">Verbes {start + 1} à {end}</p>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {mode === 'training' && (
            <TrainingMode verbs={trainingList} onFinish={goToHome} />
          )}

          {mode === 'exam' && (
            <ExamMode 
              onFinish={(results) => {
                setExamResult(results);
                setMode('result');
              }} 
            />
          )}

          {mode === 'result' && examResult && (
            <ResultView 
              result={examResult} 
              onRetry={startExam} 
              onHome={goToHome} 
            />
          )}
        </AnimatePresence>
        </div>
      </main>
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#6366f1 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
    </div>
  );
}

function TrainingMode({ verbs, onFinish }: { verbs: Verb[], onFinish: () => void }) {
  const [queue, setQueue] = useState<Verb[]>([...verbs]);
  const [totalCount] = useState(verbs.length);
  const [inputs, setInputs] = useState({ base: '', pastSimple: '', pastParticiple: '' });
  const [revealed, setRevealed] = useState(false);
  const [completed, setCompleted] = useState(false);

  const currentVerb = queue[0];

  const handleReveal = () => {
    if (!currentVerb) return;
    setRevealed(true);
    setInputs({
      base: currentVerb.base,
      pastSimple: currentVerb.pastSimple,
      pastParticiple: currentVerb.pastParticiple
    });
  };

  const isCorrect = (field: keyof typeof inputs) => {
    if (!currentVerb) return false;
    return inputs[field].toLowerCase().trim() === currentVerb[field].toLowerCase();
  };

  const nextVerb = () => {
    if (!currentVerb) return;

    const allCorrect = isCorrect('base') && isCorrect('pastSimple') && isCorrect('pastParticiple');
    
    let newQueue = [...queue];
    
    if (allCorrect && !revealed) {
      newQueue.shift(); // Remove from queue
    } else {
      const failedVerb = newQueue.shift()!;
      newQueue.push(failedVerb); // Move to the back
    }
    
    if (newQueue.length === 0) {
      setCompleted(true);
    } else {
      setQueue(newQueue);
      setInputs({ base: '', pastSimple: '', pastParticiple: '' });
      setRevealed(false);
    }
  };

  if (completed) {
    return (
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex-1 bg-slate-900/20 p-4 md:p-12 flex flex-col items-center justify-center relative w-full border border-slate-800/50 rounded-3xl"
      >
        <div className="text-center space-y-6">
          <div className="mx-auto w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="w-10 h-10 text-emerald-400" />
          </div>
          <h2 className="text-4xl font-bold text-white">Série terminée !</h2>
          <p className="text-slate-400 text-lg">Vous avez maîtrisé tous les verbes de cette série.</p>
          <button
            onClick={onFinish}
            className="mt-8 px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-500 transition-colors"
          >
            Retour au menu
          </button>
        </div>
      </motion.section>
    );
  }

  if (!currentVerb) return null;

  const masteredCount = totalCount - queue.length;

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex-1 bg-slate-900/20 p-4 md:p-12 flex flex-col items-center justify-center relative w-full border border-slate-800/50 rounded-3xl"
    >
      <div className="absolute top-6 left-6 flex items-center gap-2 bg-slate-950/50 px-4 py-2 rounded-full border border-slate-800">
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
        <span className="text-sm font-mono text-slate-300">
          MAÎTRISÉS : <span className="text-white font-bold">{masteredCount}/{totalCount}</span>
        </span>
      </div>

      <div className="w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-8 md:p-10 flex flex-col gap-10 mt-12 md:mt-0">
        <div className="text-center">
          <h2 className="text-slate-500 text-sm font-medium uppercase tracking-[0.2em] mb-2">Traduction</h2>
          <h1 className="text-5xl font-bold text-white capitalize">{currentVerb.translation}</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InputField 
            label="Base Verbale" 
            value={inputs.base} 
            onChange={(v) => setInputs(prev => ({ ...prev, base: v }))}
            correctValue={revealed ? currentVerb.base : undefined}
            status={inputs.base ? (isCorrect('base') ? 'correct' : 'typing') : 'empty'}
          />
          <InputField 
            label="Prétérit" 
            value={inputs.pastSimple} 
            onChange={(v) => setInputs(prev => ({ ...prev, pastSimple: v }))}
            correctValue={revealed ? currentVerb.pastSimple : undefined}
            status={inputs.pastSimple ? (isCorrect('pastSimple') ? 'correct' : 'typing') : 'empty'}
          />
          <InputField 
            label="Participe Passé" 
            value={inputs.pastParticiple} 
            onChange={(v) => setInputs(prev => ({ ...prev, pastParticiple: v }))}
            correctValue={revealed ? currentVerb.pastParticiple : undefined}
            status={inputs.pastParticiple ? (isCorrect('pastParticiple') ? 'correct' : 'typing') : 'empty'}
          />
        </div>

        <div className="flex items-center justify-between pt-4 flex-wrap gap-4">
          <button
            onClick={handleReveal}
            disabled={revealed}
            className="px-6 py-3 text-slate-400 hover:text-white font-semibold transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Eye className="w-5 h-5" />
            Révéler la réponse
          </button>
          <button
            onClick={nextVerb}
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-indigo-600/20 flex items-center gap-3"
          >
            Verbe suivant
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="absolute bottom-8 hidden md:flex gap-4 text-slate-600 text-[10px] font-bold uppercase tracking-widest">
        <div className="flex items-center gap-1"><span className="px-1.5 py-0.5 border border-slate-800 rounded bg-slate-900">Tab</span> Champs</div>
        <div className="flex items-center gap-1"><span className="px-1.5 py-0.5 border border-slate-800 rounded bg-slate-900">Enter</span> Valider</div>
      </div>
    </motion.section>
  );
}

function InputField({ label, value, onChange, status, correctValue }: { 
  label: string; 
  value: string; 
  onChange: (v: string) => void;
  status: 'empty' | 'typing' | 'correct';
  correctValue?: string;
}) {
  const isCorrect = status === 'correct';
  return (
    <div className="space-y-2 flex flex-col">
      <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">{label}</label>
      <div className="relative flex flex-col items-center">
        <input
          type="text"
          value={value}
          readOnly={isCorrect}
          onChange={(e) => onChange(e.target.value)}
          placeholder={correctValue ? correctValue : "..."}
          className={`w-full font-mono py-4 px-4 rounded-xl outline-none text-lg text-center transition-all
            ${isCorrect ? 'bg-slate-950 border-2 border-emerald-500/50 text-emerald-400' : 
              status === 'typing' && value.length > 0 ? 'bg-slate-950 border-2 border-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.2)]' : 'bg-slate-950 border-2 border-slate-800 text-white'}
            ${correctValue ? 'placeholder:text-emerald-400 placeholder:opacity-100' : 'placeholder:text-slate-600'}
          `}
        />
        {isCorrect && (
           <p className="text-[10px] text-emerald-500/70 text-center font-medium mt-2 absolute -bottom-6">CORRECT</p>
        )}
      </div>
    </div>
  );
}

function ExamMode({ onFinish }: { onFinish: (results: any) => void }) {
  const examVerbs = useMemo(() => {
    return [...IRREGULAR_VERBS].sort(() => Math.random() - 0.5).slice(0, 20);
  }, []);

  const [answers, setAnswers] = useState<Record<number, string[]>>(
    Object.fromEntries(examVerbs.map(v => [v.id, ['', '', '']]))
  );
  
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleSubmit = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    
    let score = 0;
    const errors: any[] = [];

    examVerbs.forEach(verb => {
      const userAns = answers[verb.id];
      const isCorrect = 
        userAns[0].toLowerCase().trim() === verb.base.toLowerCase() &&
        userAns[1].toLowerCase().trim() === verb.pastSimple.toLowerCase() &&
        userAns[2].toLowerCase().trim() === verb.pastParticiple.toLowerCase();

      if (isCorrect) {
        score++;
      } else {
        errors.push({ verb, answers: userAns });
      }
    });

    onFinish({ score, total: examVerbs.length, errors });
  };

  const handleInputChange = (verbId: number, index: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [verbId]: prev[verbId].map((v, i) => i === index ? value : v)
    }));
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 flex flex-col space-y-8 pb-10"
    >
      <div className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-sm py-4 flex items-center justify-between border-b border-slate-800 px-2 rounded-t-xl">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${timeLeft < 60 ? 'bg-red-500/20 text-red-500 animate-pulse' : 'bg-cyan-500/20 text-cyan-500'}`}>
            <Timer className="w-5 h-5" />
          </div>
          <span className={`text-2xl font-mono font-bold ${timeLeft < 60 ? 'text-red-500' : 'text-white'}`}>
            {minutes}:{seconds.toString().padStart(2, '0')}
          </span>
        </div>
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-white text-slate-950 font-bold rounded-lg hover:bg-slate-200 transition-colors"
        >
          Soumettre ma copie
        </button>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-800/50 border-b border-slate-800">
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Français</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Base Verbale</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Prétérit</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Participe Passé</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {examVerbs.map((verb) => (
                <tr key={verb.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-300 capitalize">{verb.translation}</td>
                  {[0, 1, 2].map(idx => (
                    <td key={idx} className="px-6 py-4">
                      <input
                        type="text"
                        value={answers[verb.id][idx]}
                        onChange={(e) => handleInputChange(verb.id, idx, e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 outline-none"
                        placeholder="..."
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.section>
  );
}

function ResultView({ result, onRetry, onHome }: { 
  result: { score: number; total: number; errors: { verb: Verb; answers: string[] }[] };
  onRetry: () => void;
  onHome: () => void;
}) {
  const percentage = Math.round((result.score / result.total) * 100);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto space-y-12 pb-12"
    >
      <div className="text-center space-y-6 bg-slate-900 border border-slate-800 rounded-3xl p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 blur-3xl -ml-32 -mb-32"></div>
        
        <div className="mx-auto w-24 h-24 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-xl shadow-indigo-500/20 mb-4">
          <Award className="w-12 h-12 text-white" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-5xl font-extrabold text-white">Score : {result.score} / {result.total}</h3>
          <p className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
            {percentage}% de réussite
          </p>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={onRetry}
            className="flex items-center gap-2 px-8 py-3 bg-white text-slate-950 font-bold rounded-xl hover:bg-slate-200 transition-colors shadow-lg"
          >
            <RotateCcw className="w-5 h-5" />
            Réessayer
          </button>
          <button
            onClick={onHome}
            className="px-8 py-3 bg-slate-800 text-slate-200 font-bold rounded-xl hover:bg-slate-700 transition-colors"
          >
            Menu Principal
          </button>
        </div>
      </div>

      {result.errors.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <XCircle className="w-6 h-6 text-red-500" />
            <h4 className="text-2xl font-bold text-white">Révisions nécessaires</h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {result.errors.map((error, idx) => (
              <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 space-y-4">
                <h5 className="font-bold text-lg text-slate-200 border-b border-slate-800 pb-2 capitalize">
                  {error.verb.translation}
                </h5>
                <div className="space-y-4 text-sm">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-slate-500 uppercase text-[10px] font-bold tracking-wider mb-1">Vos réponses</p>
                      <div className="space-y-1">
                        <p className={error.answers[0].toLowerCase().trim() === error.verb.base.toLowerCase() ? 'text-emerald-400' : 'text-red-400 opacity-80'}>{error.answers[0] || '---'}</p>
                        <p className={error.answers[1].toLowerCase().trim() === error.verb.pastSimple.toLowerCase() ? 'text-emerald-400' : 'text-red-400 opacity-80'}>{error.answers[1] || '---'}</p>
                        <p className={error.answers[2].toLowerCase().trim() === error.verb.pastParticiple.toLowerCase() ? 'text-emerald-400' : 'text-red-400 opacity-80'}>{error.answers[2] || '---'}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-slate-500 uppercase text-[10px] font-bold tracking-wider mb-1 text-right">Bonne réponse</p>
                      <div className="space-y-1 text-right font-medium text-emerald-400">
                        <p>{error.verb.base}</p>
                        <p>{error.verb.pastSimple}</p>
                        <p>{error.verb.pastParticiple}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
