export interface Verb {
  id: number;
  base: string;
  pastSimple: string;
  pastParticiple: string;
  translation: string;
}

export const IRREGULAR_VERBS: Verb[] = [
  { id: 61, base: "lend", pastSimple: "lent", pastParticiple: "lent", translation: "prêter" },
  { id: 62, base: "let", pastSimple: "let", pastParticiple: "let", translation: "permettre, louer" },
  { id: 63, base: "lie", pastSimple: "lay", pastParticiple: "lain", translation: "être couché, étendu" },
  { id: 64, base: "light", pastSimple: "lit", pastParticiple: "lit", translation: "allumer, éclairer" },
  { id: 65, base: "lose", pastSimple: "lost", pastParticiple: "lost", translation: "perdre" },
  { id: 66, base: "make", pastSimple: "made", pastParticiple: "made", translation: "faire" },
  { id: 67, base: "mean", pastSimple: "meant", pastParticiple: "meant", translation: "signifier, vouloir dire" },
  { id: 68, base: "meet", pastSimple: "met", pastParticiple: "met", translation: "rencontrer" },
  { id: 69, base: "mow", pastSimple: "mowed", pastParticiple: "mown", translation: "tondre la pelouse" },
  { id: 70, base: "pay", pastSimple: "paid", pastParticiple: "paid", translation: "payer" },
  { id: 71, base: "put", pastSimple: "put", pastParticiple: "put", translation: "mettre, poser" },
  { id: 72, base: "read", pastSimple: "read", pastParticiple: "read", translation: "lire" },
  { id: 73, base: "ride", pastSimple: "rode", pastParticiple: "ridden", translation: "aller à vélo / monter à cheval" },
  { id: 74, base: "ring", pastSimple: "rang", pastParticiple: "rung", translation: "sonner, téléphoner" },
  { id: 75, base: "rise", pastSimple: "rose", pastParticiple: "risen", translation: "se lever" },
  { id: 76, base: "run", pastSimple: "ran", pastParticiple: "run", translation: "courir" },
  { id: 77, base: "say", pastSimple: "said", pastParticiple: "said", translation: "dire" },
  { id: 78, base: "see", pastSimple: "saw", pastParticiple: "seen", translation: "voir" },
  { id: 79, base: "seek", pastSimple: "sought", pastParticiple: "sought", translation: "(re)chercher" },
  { id: 80, base: "sell", pastSimple: "sold", pastParticiple: "sold", translation: "vendre" },
  { id: 81, base: "send", pastSimple: "sent", pastParticiple: "sent", translation: "envoyer" },
  { id: 82, base: "set", pastSimple: "set", pastParticiple: "set", translation: "fixer, mettre" },
  { id: 83, base: "sew", pastSimple: "sewed", pastParticiple: "sewn", translation: "coudre" },
  { id: 84, base: "shake", pastSimple: "shook", pastParticiple: "shaken", translation: "secouer" },
  { id: 85, base: "shine", pastSimple: "shone", pastParticiple: "shone", translation: "briller, luire" },
  { id: 86, base: "shoot", pastSimple: "shot", pastParticiple: "shot", translation: "tirer (fusil), lancer" },
  { id: 87, base: "show", pastSimple: "showed", pastParticiple: "shown", translation: "montrer" },
  { id: 88, base: "shrink", pastSimple: "shrank", pastParticiple: "shrunk", translation: "rétrécir" },
  { id: 89, base: "shut", pastSimple: "shut", pastParticiple: "shut", translation: "fermer" },
  { id: 90, base: "sing", pastSimple: "sang", pastParticiple: "sung", translation: "chanter" },
  { id: 91, base: "sink", pastSimple: "sank", pastParticiple: "sunk", translation: "couler (navire)" },
  { id: 92, base: "sit", pastSimple: "sat", pastParticiple: "sat", translation: "être assis, s'asseoir" },
  { id: 93, base: "sleep", pastSimple: "slept", pastParticiple: "slept", translation: "dormir" },
  { id: 94, base: "slide", pastSimple: "slid", pastParticiple: "slid", translation: "glisser" },
  { id: 95, base: "smell", pastSimple: "smelt", pastParticiple: "smelt", translation: "sentir (odeur)" },
  { id: 96, base: "speak", pastSimple: "spoke", pastParticiple: "spoken", translation: "parler" },
  { id: 97, base: "spend", pastSimple: "spent", pastParticiple: "spent", translation: "passer, dépenser" },
  { id: 98, base: "spoil", pastSimple: "spoilt", pastParticiple: "spoilt", translation: "gâter, abîmer" },
  { id: 99, base: "spit", pastSimple: "spat", pastParticiple: "spat", translation: "cracher" },
  { id: 100, base: "split", pastSimple: "split", pastParticiple: "split", translation: "séparer / diviser" },
];
