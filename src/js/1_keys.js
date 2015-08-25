var red = "#110a08";
var yellow = "#FFFF00";
var paleBlue = "#A2B5FF";
var darkRed = "#BF0000";
var orange = "#F87D0E";
var purple = "#8E008E";

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
      title: "C Major",
      keyChar: "Completely pure. It's character is: innocence, simplicity, naïvety, children's talk.",
      scale: ["C", "D", "E", "F", "G", "A", "B"],
      scaleHTML: ["C", "D", "E", "F", "G", "A", "B"],
      chords: ["C-Major", "D-Minor", "E-Minor", "F-Major", "G-Major", "A-Minor", "B-Minor"],
      color: red
    },
    CSharp: {
      title: "C# Major",
      keyChar: "A leering key, degenerating into grief and rapture. It cannot laugh, but it can smile; it cannot howl, but it can at least grimace its crying.",
      scale: ["C-Sharp", "D-Sharp", "F", "F-Sharp", "G-Sharp", "A-Sharp", "C2"],
      scaleHTML: ["C&sharp;", "D&sharp;", "F", "F&sharp;", "G&sharp;", "A&sharp;", "C"],
      chords: ["C-Sharp-Major", "D-Sharp-Minor", "F-Minor", "F-Sharp-Major", "G-Sharp-Major", "A-Sharp-Minor", "C2-Minor"],
      color: red
    },
    D: {
      title: "D Major",
      keyChar: "The key of triumph, of Hallejuahs, of war-cries, of victory-rejoicing.",
      scale: ["D", "E", "F-Sharp", "G", "A", "B", "C2-Sharp"],
      scaleHTML: ["D", "E", "F&sharp;", "G", "A", "B", "C&sharp;"],
      chords: ["D-Major", "E-Minor", "F-Sharp-Minor", "G-Major", "A-Major", "B-Minor", "C2-Sharp-Minor"],
      color: yellow
    },
    DSharp: {
      title: "D# Major",
      keyChar: "The key of love, of devotion, of intimate conversation with God.",
      scale: ["D-Sharp", "F", "G", "G-Sharp", "A-Sharp", "C2", "D2"],
      scaleHTML: ["D&sharp;", "F", "G", "G&sharp;", "A&sharp;", "C", "D"],
      chords: ["D-Sharp-Major", "F-Minor", "G-Minor", "G-Sharp-Major", "A-Sharp-Major", "C2-Minor", "D2-Minor"],
      color: yellow
    },
    E: {
      title: "E Major",
      keyChar: "Noisy shouts of joy, laughing pleasure and not yet complete, full delight lies in E Major.",
      scale: ["E", "F-Sharp", "G-Sharp", "A", "B", "C2-Sharp", "D2-Sharp"],
      scaleHTML: ["E", "F&sharp;", "G&sharp;", "A", "B", "C&sharp;", "D&sharp;"],
      chords: ["E-Major", "F-Sharp-Minor", "G-Sharp-Minor", "A-Major", "B-Major", "C2-Sharp-Minor", "D2-Sharp-Minor"],
      color: paleBlue
    },
    F: {
      title: "F Major",
      keyChar: "Complaisance & Calm.",
      scale: ["F", "G", "A", "A-Sharp", "C2", "D2", "E2"],
      scaleHTML: ["F", "G", "A", "A&sharp;", "C", "D", "E"],
      chords: ["F-Major", "G-Minor", "A-Minor", "A-Sharp-Major", "C2-Major", "D2-Minor", "E2-Minor"],
      color: darkRed
    },
    FSharp: {
      title: "F# Major",
      keyChar: "Triumph over difficulty, free sigh of relief utered when hurdles are surmounted.",
      scale: ["F-Sharp", "G-Sharp", "A-Sharp", "B", "C2-Sharp", "D2-Sharp", "F2"],
      scaleHTML: ["F&sharp;", "G&sharp;", "A&sharp;", "B", "C&sharp;", "D&sharp;", "F"],
      chords: ["F-Sharp-Major", "G-Sharp-Minor", "A-Sharp-Minor", "B-Major", "C2-Sharp-Major", "D2-Sharp-Minor", "F2-Minor"],
      color: darkRed
    },
    G: {
      title: "G Major",
      keyChar: "Everything rustic, idyllic and lyrical, every calm and satisfied passion, every tender gratitude for true friendship and faithful love.",
      scale: ["G", "A", "B", "C2", "D2", "E2", "F2-Sharp"],
      scaleHTML: ["G", "A", "B", "C", "D", "E", "F&sharp;"],
      chords: ["G-Major", "A-Minor", "B-Minor", "C2-Major", "D2-Major", "E2-Minor", "F2-Sharp-Minor"],
      color: orange
    },
    GSharp: {
      title: "G# Major",
      keyChar: "Key of the grave. Death, grave, putrefaction, judgment, eternity lie in its radius.",
      scale: ["G-Sharp", "A-Sharp", "C2", "C2-Sharp", "D2-Sharp", "F2", "G2"],
      scaleHTML: ["G&sharp;", "A&sharp;", "C", "C&sharp;", "D&sharp;", "F", "G"],
      chords: ["G-Sharp-Major", "A-Sharp-Minor", "C2-Minor", "C2-Sharp-Major", "D2-Sharp-Major", "F2-Minor", "G2-Minor"],
      color: orange
    },
    A: {
      title: "A Major",
      keyChar: "This key includes declarations of innocent love, satisfaction with one's state of affairs.",
      scale: ["A", "B", "C2-Sharp", "D2", "E2", "F2-Sharp", "G2-Sharp"],
      scaleHTML: ["A", "B", "C&sharp;", "D", "E", "F&sharp;", "G&sharp;"],
      chords: ["A-Major", "B-Minor", "C2-Sharp-Minor", "D2-Major", "E2-Major", "F2-Sharp-Minor", "G2-Sharp-Minor"],
      color: purple
    },
    ASharp: {
      title: "A# Major",
      keyChar: "Cheerful love, clear conscience, hope aspiration for a better world.",
      scale: ["A-Sharp", "C2", "D2", "D2-Sharp", "F2", "G2", "A2"],
      scaleHTML: ["A&sharp;", "C", "D", "D&sharp;", "F", "G", "A"],
      chords: ["A-Sharp-Major", "C2-Minor", "D2-Minor", "D2-Sharp-Major", "F2-Major", "G2-Minor", "A2-Minor"],
      color: purple
    },
    B: {
      title: "B Major",
      keyChar: "Strongly coloured, announcing wild passions, composed from the most glaring coulors.",
      scale: ["B", "C2-Sharp", "D2-Sharp", "E2", "F2-Sharp", "G2-Sharp", "A2-Sharp"],
      scaleHTML: ["B", "C&sharp;", "D&sharp;", "E", "F&sharp;", "G&sharp;", "A&sharp;"],
      chords: ["B-Major", "C2-Sharp-Minor", "D2-Sharp-Minor", "E2-Major", "F2-Sharp-Major", "G2-Sharp-Minor", "A2-Sharp-Minor"],
      color: paleBlue
    }
  },
  minor: {
    C: {
      title: "C Minor",
      keyChar: "Declaration of love and at the same time the lament of unhappy love. All languishing, longing, sighing of the love-sick soul lies in this key.",
      scale: ["C", "D", "D-Sharp", "F", "G", "G-Sharp", "A-Sharp"],
      scaleHTML: ["C", "D", "D&sharp;", "F", "G", "G&sharp;", "A&sharp;"],
      chords: ["C-Minor", "D-Minor", "D-Sharp-Major", "F-Minor", "G-Minor", "G-Sharp-Major", "A-Sharp-Major"],
      color: red
    },
    CSharp: {
      title: "C# Minor",
      keyChar: "Penitential lamentation, intimate conversation with God, the friend and help-meet of life; sighs of disappointed friendship and love lie in its radius.",
      scale: ["C-Sharp", "D-Sharp", "E", "F-Sharp", "G-Sharp", "A", "B"],
      scaleHTML: ["C&sharp;", "D&sharp;", "E", "F&sharp;", "G&sharp;", "A", "B"],
      chords: ["C-Sharp-Minor", "D-Sharp-Minor", "E-Major", "F-Sharp-Minor", "G-Sharp-Major", "A-Major", "B-Major"],
      color: red
    },
    D: {
      title: "D Minor",
      keyChar: "Melancholy womanliness, the spleen and humours brood.",
      scale: ["D", "E", "F", "G", "A", "A-Sharp", "C2"],
      scaleHTML: ["D", "E", "F", "G", "A", "A&sharp;", "C"],
      chords: ["D-Minor", "E-Minor", "F-Major", "G-Minor", "A-Minor", "A-Sharp-Major", "C2-Major"],
      color: yellow
    },
    DSharp: {
      title: "D# Minor",
      keyChar: "Feelings of the anxiety of the soul's deepest distress, of brooding despair, of blackest depresssion, of the most gloomy condition of the soul.",
      scale: ["D-Sharp", "F", "F-Sharp", "G-Sharp", "A-Sharp", "B", "C2-Sharp"],
      scaleHTML: ["D&sharp;", "F", "F&sharp;", "G&sharp;", "A&sharp;", "B", "C&sharp;"],
      chords: ["D-Sharp-Minor", "F-Minor", "F-Sharp-Major", "G-Sharp-Minor", "A-Sharp-Minor", "B-Major", "C2-Sharp-Major"],
      color: yellow
    },
    E: {
      title: "E Minor",
      keyChar: "Naive, womanly innocent declaration of love, lament without grumbling; sighs accompanied by few tears.",
      scale: ["E", "FSharp", "G", "A", "B", "C2", "D2"],
      scaleHTML: ["E", "F&sharp;", "G", "A", "B", "C", "D"],
      chords: ["E-Minor", "F-Sharp-Minor", "G-Major", "A-Minor", "B-Minor", "C2-Major", "D2-Major"],
      color: paleBlue
    },
    F: {
      title: "F Minor",
      keyChar: "Deep depression, funereal lament, groans of misery and longing for the grave.",
      scale: ["F", "G", "G-Sharp", "A-Sharp", "C2", "C2-Sharp", "D2-Sharp"],
      scaleHTML: ["F", "G", "G&sharp;", "A&sharp;", "C", "C&sharp;", "D&sharp;"],
      chords: ["F-Minor", "G-Minor", "G-Sharp-Major", "A-Sharp-Minor", "C2-Minor", "C2-Sharp-Major", "D2-Sharp-Major"],
      color: darkRed
    },
    FSharp: {
      title: "F# Minor",
      keyChar: "A gloomy key: it tugs at passion as a dog biting a dress. Resentment and discontent are its language.",
      scale: ["F-Sharp", "G-Sharp", "A", "B", "C2-Sharp", "D2", "E2"],
      scaleHTML: ["F&sharp;", "G&sharp;", "A", "B", "C&sharp;", "D", "E"],
      chords: ["F-Sharp-Minor", "G-Sharp-Minor", "A-Major", "B-Minor", "C2-Sharp-Minor", "D2-Major", "E2-Major"],
      color: darkRed
    },
    G: {
      title: "G Minor",
      keyChar: "Discontent, uneasiness, worry about a failed scheme; bad-tempered gnashing of teeth; in a word: resentment and dislike.",
      scale: ["G", "A", "A-Sharp", "C2", "D2", "D2-Sharp", "F2"],
      scaleHTML: ["G", "A", "A&sharp;", "C", "D", "D&sharp;", "F"],
      chords: ["G-Minor", "A-Minor", "A-Sharp-Major", "C2-Minor", "D2-Minor", "D2-Sharp-Major", "F2-Major"],
      color: orange
    },
    GSharp: {
      title: "G# Minor",
      keyChar: "Grumbler, heart squeezed until it suffocates; wailing lament, difficult struggle.",
      scale: ["G-Sharp", "A-Sharp", "B", "C2-Sharp", "D2-Sharp", "E2", "F2-Sharp"],
      scaleHTML: ["G&sharp;", "A&sharp;", "B", "C&sharp;", "D&sharp;", "E", "F&sharp;"],
      chords: ["G-Sharp-Minor", "A-Sharp-Minor", "B-Major", "C2-Sharp-Minor", "D2-Sharp-Minor", "E2-Major", "F2-Sharp-Major"],
      color: orange
    },
    A: {
      title: "A Minor",
      keyChar: "Grumbler, heart squeezed until it suffocates; wailing lament, difficult struggle.",
      scale: ["A", "B", "C2", "D2", "E2", "F2", "G2"],
      scaleHTML: ["A", "B", "C", "D", "E", "F", "G"],
      chords: ["A-Minor", "B-Minor", "C2-Major", "D2-Minor", "E2-Minor", "F2-Major", "G2-Major"],
      color: purple
    },
    ASharp: {
      title: "A# Minor",
      keyChar: "A quaint creature, often dressed in the garment of night. It is somewhat surly and very seldom takes on a pleasant countenance.",
      scale: ["A-Sharp", "C2", "C2-Sharp", "D2-Sharp", "F2", "F2-Sharp", "G2-Sharp"],
      scaleHTML: ["A&sharp;", "C", "C&sharp;", "D&sharp;", "F", "F&sharp;", "G&sharp;"],
      chords: ["A-Sharp-Minor", "C2-Minor", "C2-Sharp-Major", "D2-Sharp-Minor", "F2-Minor", "F2-Sharp-Major", "G2-Sharp-Major"],
      color: purple
    },
    B: {
      title: "B Minor",
      keyChar: "This is as it were the key of patience, of calm awaiting ones's fate and of submission to divine dispensation.",
      scale: ["B", "C2-Sharp", "D2", "E2", "F2-Sharp", "G2", "A2-Sharp"],
      scaleHTML: ["B", "C&sharp;", "D", "E", "F&sharp;", "G", "A&sharp;"],
      chords: ["B-Minor", "C2-Sharp-Minor", "D2-Major", "E2-Minor", "F2-Sharp-Minor", "G2-Major", "A2-Sharp-Major"],
      color: paleBlue
    },
  }
};
