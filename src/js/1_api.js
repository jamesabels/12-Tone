var red = "#110a08";
var yellow = "#FFFF00";
var paleBlue = "#A2B5FF";
var darkRed = "#BF0000";
var orange = "#F87D0E";
var purple = "#8E008E";

var instrument = {
  piano: {
    note: {
      C: "sound\\piano\\C.mp3",
      Csharp: "sound\\piano\\CSharpDFlat.mp3",
      Dflat: "sound\\piano\\CSharpDFlat.mp3",
      D: "sound\\piano\\D.mp3",
      Dsharp: "sound\\piano\\DSharpEFlat.mp3",
      Eflat: "sound\\piano\\DSharpEFlat.mp3",
      E: "sound\\piano\\E.mp3",
      F: "sound\\piano\\F.mp3",
      Fsharp: "sound\\piano\\FSharpGFlat.mp3",
      Gflat: "sound\\piano\\FSharpGFlat.mp3",
      G: "sound\\piano\\G.mp3",
      Gsharp: "sound\\piano\\GSharpAFlat.mp3",
      Aflat: "sound\\piano\\GSharpAFlat.mp3",
      A: "sound\\piano\\A.mp3",
      Asharp: "sound\\piano\\ASharpBFlat.mp3",
      Bflat: "sound\\piano\\ASharpBFlat.mp3",
      B: "sound\\piano\\B.mp3"
    },
    chord: {
      major: {
        C: "sound\\piano\\CMaj.mp3",
        Csharp: "sound\\piano\\CSharpDFlatMaj.mp3",
        Dflat: "sound\\piano\\CSharpDFlatMaj.mp3",
        D: "sound\\piano\\DMaj.mp3",
        Dsharp: "sound\\piano\\DSharpEFlatMaj.mp3",
        Eflat: "sound\\piano\\DSharpEFlatMaj.mp3",
        E: "sound\\piano\\EMaj.mp3",
        F: "sound\\piano\\FMaj.mp3",
        Fsharp: "sound\\piano\\FSharpGFlatMaj.mp3",
        Gflat: "sound\\piano\\FSharpGFlatMaj.mp3",
        G: "sound\\piano\\GMaj.mp3",
        Gsharp: "sound\\piano\\GSharpAFlatMaj.mp3",
        Aflat: "sound\\piano\\GSharpAFlatMaj.mp3",
        A: "sound\\piano\\AMaj.mp3",
        Asharp: "sound\\piano\\ASharpBFlatMaj.mp3",
        Bflat: "sound\\piano\\ASharpBFlatMaj.mp3",
        B: "sound\\piano\\BMaj.mp3"
      },
      minor: {
        C: "sound\\piano\\CMin.mp3",
        Csharp: "sound\\piano\\CSharpDFlatMin.mp3",
        Dflat: "sound\\piano\\CSharpDFlatMin.mp3",
        D: "sound\\piano\\DMin.mp3",
        Dsharp: "sound\\piano\\DSharpEFlatMin.mp3",
        Eflat: "sound\\piano\\DSharpEFlatMin.mp3",
        E: "sound\\piano\\EMin.mp3",
        F: "sound\\piano\\FMin.mp3",
        Fsharp: "sound\\piano\\FSharpGFlatMin.mp3",
        Gflat: "sound\\piano\\FSharpGFlatMin.mp3",
        G: "sound\\piano\\GMin.mp3",
        Gsharp: "sound\\piano\\GSharpAFlatMin.mp3",
        Aflat: "sound\\piano\\GSharpAFlatMin.mp3",
        A: "sound\\piano\\AMin.mp3",
        Asharp: "sound\\piano\\ASharpBFlatMin.mp3",
        Bflat: "sound\\piano\\ASharpBFlatMin.mp3",
        B: "sound\\piano\\BMin.mp3"
      }
    }
  }
}; // END INSTRUMENTS

var key = {
  mode: {
     major: {
      nums: ["I", "ii", "iii", "IV", "V", "vi", "vii&deg;"],
     },
     minor: {
      nums: ["i", "ii&deg;", "III", "iv", "v", "VI", "VII"],
     },
  },
  major: {
    C: {
      keyChar: "Completely pure. It's character is: innocence, simplicity, naïvety, children's talk.",
      scale: ["C", "D", "E", "F", "G", "A", "B"],
      noteSound: [instrument.piano.note.C, instrument.piano.note.D, instrument.piano.note.E, instrument.piano.note.F, instrument.piano.note.G, instrument.piano.note.A, instrument.piano.note.B],
      chordSound: [instrument.piano.chord.C, instrument.piano.chord.D, instrument.piano.chord.E, instrument.piano.chord.F, instrument.piano.chord.G, instrument.piano.chord.A, instrument.piano.chord.B],
      color: red
    },
    CSharp: {
      keyChar: "A leering key, degenerating into grief and rapture. It cannot laugh, but it can smile; it cannot howl, but it can at least grimace its crying.",
      scale: ["C&sharp;", "D&sharp;", "E&sharp;", "F&sharp;", "G&sharp;", "A&sharp;", "B&sharp;"],
      color: red
    },
    D: {
      keyChar: "The key of triumph, of Hallejuahs, of war-cries, of victory-rejoicing.",
      scale: ["D", "E", "F&sharp;", "G", "A", "B", "C&sharp;"],
      color: yellow
    },
    DSharp: {
      keyChar: "The key of love, of devotion, of intimate conversation with God.",
      scale: ["D", "E&#9837;", "F", "G", "A&#9837;", "B&#9837;", "C"],
      color: yellow
    },
    E: {
      keyChar: "Noisy shouts of joy, laughing pleasure and not yet complete, full delight lies in E Major.",
      scale: ["E", "F&sharp;", "G&sharp;", "A", "B", "C&sharp;", "D&sharp;"],
      color: paleBlue
    },
    F: {
      keyChar: "Complaisance & Calm.",
      scale: ["F", "G", "A", "B&#9837;", "C", "D", "E"],
      color: darkRed
    },
    FSharp: {
      keyChar: "Triumph over difficulty, free sigh of relief utered when hurdles are surmounted; echo of a soul which has fiercely struggled and finally conquered lies in all uses of this key.",
      scale: ["F&sharp;", "G&sharp;", "A&sharp;", "B", "C&sharp;", "D&sharp;", "E&sharp;"],
      color: darkRed
    },
    G: {
      keyChar: "Everything rustic, idyllic and lyrical, every calm and satisfied passion, every tender gratitude for true friendship and faithful love.",
      scale: ["G", "A", "B", "C", "D", "E", "F&sharp;"],
      color: orange
    },
    GSharp: {
      keyChar: "Key of the grave. Death, grave, putrefaction, judgment, eternity lie in its radius.",
      scale: ["G&sharp;", "A&sharp;", "B&sharp;", "C&sharp;", "D&sharp;", "E&sharp;", "F&sharp;&sharp;"],
      color: orange
    },
    A: {
      keyChar: "This key includes declarations of innocent love, satisfaction with one's state of affairs; hope of seeing one's beloved again when parting; youthful cheerfulness and trust in God.",
      scale: ["A", "B", "C&sharp;", "D", "E", "F&sharp;", "G&sharp;"],
      color: purple
    },
    ASharp: {
      keyChar: "Cheerful love, clear conscience, hope aspiration for a better world.",
      scale: ["A", "B&#9837;", "C", "D", "E&#9837;", "F", "G"],
      color: purple
    },
    B: {
      keyChar: "Strongly coloured, announcing wild passions, composed from the most glaring coulors. Anger, rage, jealousy, fury, despair and every burden of the heart lies in its sphere.",
      scale: ["B", "C&sharp;", "D", "E", "F&sharp;", "G&sharp;", "A&sharp;"],
      color: paleBlue
    }
  },
  minor: {
    C: {
      keyChar: "Declaration of love and at the same time the lament of unhappy love. All languishing, longing, sighing of the love-sick soul lies in this key.",
      scale: ["C", "D", "E&#9837;", "F", "G", "A&#9837;", "B&#9837;"],
      color: red
    },
    CSharp: {
      keyChar: "Penitential lamentation, intimate conversation with God, the friend and help-meet of life; sighs of disappointed friendship and love lie in its radius.",
      scale: ["C&sharp;", "D&sharp;", "E", "F&sharp;", "G&sharp;", "A", "B"],
      color: red
    },
    D: {
      keyChar: "Melancholy womanliness, the spleen and humours brood.",
      scale: ["D", "E", "F", "G", "A", "B&#9837;", "C"],
      color: yellow
    },
    DSharp: {
      keyChar: "Feelings of the anxiety of the soul's deepest distress, of brooding despair, of blackest depresssion, of the most gloomy condition of the soul.",
      scale: ["D&sharp;", "E&sharp;", "F&sharp;", "G&sharp;", "A&sharp;", "B", "C&sharp;"],
      color: yellow
    },
    E: {
      keyChar: "Naive, womanly innocent declaration of love, lament without grumbling; sighs accompanied by few tears.",
      scale: ["E", "F&sharp;", "G", "A", "B", "C", "D"],
      color: paleBlue
    },
    F: {
      keyChar: "Deep depression, funereal lament, groans of misery and longing for the grave.",
      scale: ["F", "G", "A&#9837;", "B&#9837;", "C", "D&#9837;", "E&#9837;"],
      color: darkRed
    },
    FSharp: {
      keyChar: "A gloomy key: it tugs at passion as a dog biting a dress. Resentment and discontent are its language.",
      scale: ["F&sharp;", "G&sharp;", "A", "B", "C&sharp;", "D", "E"],
      color: darkRed
    },
    G: {
      keyChar: "Discontent, uneasiness, worry about a failed scheme; bad-tempered gnashing of teeth; in a word: resentment and dislike.",
      scale: ["G", "A", "B&#9837;", "C", "D", "E&#9837;", "F"],
      color: orange
    },
    GSharp: {
      keyChar: "Grumbler, heart squeezed until it suffocates; wailing lament, difficult struggle; in a word, the color of this key is everything struggling with difficulty.",
      scale: ["G&sharp;", "A&sharp;", "B&sharp;", "C&sharp;", "D&sharp;", "E&sharp;", "F&sharp;&sharp;"],
      color: orange
    },
    A: {
      keyChar: "Grumbler, heart squeezed until it suffocates; wailing lament, difficult struggle; in a word, the color of this key is everything struggling with difficulty.",
      scale: ["A", "B", "C", "D", "E", "F", "G"],
      color: purple
    },
    ASharp: {
      keyChar: "A quaint creature, often dressed in the garment of night. It is somewhat surly and very seldom takes on a pleasant countenance.",
      scale: ["A&sharp;", "B&sharp;", "C&sharp;", "D&sharp;", "E&sharp;", "F&sharp;", "G&sharp;"],
      color: purple
    },
    B: {
      keyChar: "This is as it were the key of patience, of calm awaiting ones's fate and of submission to divine dispensation.",
      scale: ["B", "C&sharp;", "D&sharp;", "E", "F&sharp;", "G&sharp;", "A&sharp;"],
      color: paleBlue
    },
  }
};