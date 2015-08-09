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
      scaleHTML: ["C", "D", "E", "F", "G", "A", "B"],
      chords: ["C-Major", "D-Minor", "E-Minor", "F-Major", "G-Major", "A-Minor", "B-Minor"],
      color: red
    },
    CSharp: {
      keyChar: "A leering key, degenerating into grief and rapture. It cannot laugh, but it can smile; it cannot howl, but it can at least grimace its crying.",
      scale: ["C-Sharp", "D-Sharp", "E-Sharp", "F-Sharp", "G-Sharp", "A-Sharp", "B-Sharp"],
      scaleHTML: ["C&sharp;", "D&sharp;", "E&sharp;", "F&sharp;", "G&sharp;", "A&sharp;", "B&sharp;"],
      chords: ["C-Sharp-Major", "D-Sharp-Minor", "E-Sharp-Minor", "F-Sharp-Major", "G-Sharp-Major", "A-Sharp-Minor", "B-Sharp-Minor"],      
      color: red
    },
    D: {
      keyChar: "The key of triumph, of Hallejuahs, of war-cries, of victory-rejoicing.",
      scale: ["D", "E", "F-Sharp", "G", "A", "B", "C-Sharp"],
      scaleHTML: ["D", "E", "F&sharp;", "G", "A", "B", "C&sharp;"],      
      chords: ["D-Major", "E-Sharp-Minor", "F-Sharp-Minor", "G-Major", "A-Major", "B-Minor", "C-Sharp-Minor"],   
      color: yellow
    },
    DSharp: {
      keyChar: "The key of love, of devotion, of intimate conversation with God.",
      scale: ["D", "E-Flat", "F", "G", "A-Flat", "B-Flat", "C"],
      scaleHTML: ["D", "E&flat;", "F", "G", "A&flat;", "B&flat;", "C"],   
      chords: ["D-Major", "E-Flat-Minor", "F-Minor", "G-Major", "A-Flat-Major", "B-Flat-Minor", "C-Minor"],      
      color: yellow
    },
    E: {
      keyChar: "Noisy shouts of joy, laughing pleasure and not yet complete, full delight lies in E Major.",
      scale: ["E", "F-Sharp", "G-Sharp", "A", "B", "C-Sharp", "D-Sharp"],
      scaleHTML: ["E", "F&sharp;", "G&sharp;", "A", "B", "C&sharp;", "D&sharp;"],
      chords: ["E-Major", "F-Sharp-Minor", "G-Sharp-Minor", "A-Major", "B-Flat-Major", "C-Sharp-Minor", "D-Sharp-Minor"],
      color: paleBlue
    },
    F: {
      keyChar: "Complaisance & Calm.",
      scale: ["F", "G", "A", "B-Flat", "C", "D", "E"],
      scaleHTML: ["F", "G", "A", "B&flat;", "C", "D", "E"],
      chords: ["F-Major", "G-Minor", "A-Minor", "B-Flat-Major", "C-Major", "D-Minor", "E-Minor"],  
      color: darkRed
    },
    FSharp: {
      keyChar: "Triumph over difficulty, free sigh of relief utered when hurdles are surmounted; echo of a soul which has fiercely struggled and finally conquered lies in all uses of this key.",
      scale: ["F-Sharp", "G-Sharp", "A-Sharp", "B", "C-Sharp", "D-Sharp", "E-Sharp"],
      scaleHTML: ["F&sharp;", "G&sharp;", "A&sharp;", "B", "C&sharp;", "D&sharp;", "E&sharp;"],
      chords: ["F-Sharp-Major", "G-Sharp-Minor", "A-Sharp-Minor", "B-Major", "C-Sharp-Major", "D-Sharp-Minor", "E-Sharp-Minor"],          
      color: darkRed
    },
    G: {
      keyChar: "Everything rustic, idyllic and lyrical, every calm and satisfied passion, every tender gratitude for true friendship and faithful love.",
      scale: ["G", "A", "B", "C", "D", "E", "F-Sharp"],
      scaleHTML: ["G", "A", "B", "C", "D", "E", "F&sharp;"],      
      chords: ["G-Major", "A-Minor", "B-Minor", "C-Major", "D-Major", "E-Minor", "F-Sharp-Minor"],                
      color: orange
    },
    GSharp: {
      keyChar: "Key of the grave. Death, grave, putrefaction, judgment, eternity lie in its radius.",
      scale: ["G-Sharp", "A-Sharp", "B-Sharp", "C-Sharp", "D-Sharp", "E-Sharp", "F-Double-Sharp"],
      scaleHTML: ["G&sharp;", "A&sharp;", "B&sharp;", "C&sharp;", "D&sharp;", "E&sharp;", "F&sharp;&sharp;"],      
      color: orange
    },
    A: {
      keyChar: "This key includes declarations of innocent love, satisfaction with one's state of affairs; hope of seeing one's beloved again when parting; youthful cheerfulness and trust in God.",
      scale: ["A", "B", "C-Sharp", "D", "E", "F-Sharp", "G-Sharp"],
      scaleHTML: ["A", "B", "C&sharp;", "D", "E", "F&sharp;", "G&sharp;"],      
      chords: ["A-Major", "B-Minor", "C-Sharp-Minor", "D-Major", "E-Major", "F-Sharp-Minor", "G-Sharp-Minor"],      
      color: purple
    },
    ASharp: {
      keyChar: "Cheerful love, clear conscience, hope aspiration for a better world.",
      scale: ["A", "B-Flat", "C", "D", "E-Flat", "F", "G"],
      scaleHTML: ["A", "B&flat;", "C", "D", "E&flat;", "F", "G"],
      chords: ["A-Major", "B-Flat-Minor", "C-Minor", "D-Major", "E-Flat-Major", "F-Minor", "G-Minor"],            
      color: purple
    },
    B: {
      keyChar: "Strongly coloured, announcing wild passions, composed from the most glaring coulors. Anger, rage, jealousy, fury, despair and every burden of the heart lies in its sphere.",
      scale: ["B", "C-Sharp", "D", "E", "F-Sharp", "G-Sharp", "A-Sharp"],
      scaleHTML: ["B", "C&sharp;", "D", "E", "F&sharp;", "G&sharp;", "A&sharp;"],      
      chords: ["B-Major", "C-Sharp-Minor", "D-Minor", "E-Major", "F-Sharp-Major", "G-Sharp-Minor", "A-Sharp-Minor"],                  
      color: paleBlue
    }
  },
  minor: {
    C: {
      keyChar: "Declaration of love and at the same time the lament of unhappy love. All languishing, longing, sighing of the love-sick soul lies in this key.",
      scale: ["C", "D", "E-Flat", "F", "G", "A-Flat", "B-Flat"],
      scaleHTML: ["C", "D", "E&flat;", "F", "G", "A&flat;", "B&flat;"],      
      chords: ["C-Minor", "D-Minor", "E-Flat-Major", "F-Minor", "G-Major", "A-Flat-Major", "B-Major"],    
      color: red
    },
    CSharp: {
      keyChar: "Penitential lamentation, intimate conversation with God, the friend and help-meet of life; sighs of disappointed friendship and love lie in its radius.",
      scale: ["C-Sharp", "D-Sharp", "E", "F-Sharp", "G-Sharp", "A", "B"],
      scaleHTML: ["C&sharp;", "D&sharp;", "E", "F&sharp;", "G&sharp;", "A", "B"],
      chords: ["C-Sharp-Minor", "D-Sharp-Minor", "E-Major", "F-Sharp-Minor", "G-Sharp-Major", "A-Major", "B-Major"],                  
      color: red
    },
    D: {
      keyChar: "Melancholy womanliness, the spleen and humours brood.",
      scale: ["D", "E", "F", "G", "A", "B-Flat", "C"],
      scaleHTML: ["D", "E", "F", "G", "A", "B&flat;", "C"],      
      chords: ["D-Minor", "E-Minor", "F-Major", "G-Minor", "A-Major", "B-Flat-Major", "C-Major"],                        
      color: yellow
    },
    DSharp: {
      keyChar: "Feelings of the anxiety of the soul's deepest distress, of brooding despair, of blackest depresssion, of the most gloomy condition of the soul.",
      scale: ["D-Sharp", "E-Sharp", "F-Sharp", "G-Sharp", "A-Sharp", "B", "C-Sharp"],
      scaleHTML: ["D&sharp", "E&sharp", "F&sharp", "G&sharp", "A&sharp", "B", "C&sharp"],      
      chords: ["D-Sharp-Minor", "E-Sharp-Minor", "F-Sharp-Major", "G-Sharp-Minor", "A-Sharp-Major", "B-Major", "C-Sharp-Major"],                        
      color: yellow
    },
    E: {
      keyChar: "Naive, womanly innocent declaration of love, lament without grumbling; sighs accompanied by few tears.",
      scale: ["E", "FSharp", "G", "A", "B", "C", "D"],
      scaleHTML: ["E", "F&sharp;", "G", "A", "B", "C", "D"],      
      chords: ["E-Minor", "F-Sharp-Minor", "G-Major", "A-Minor", "B-Major", "C-Major", "D-Major"],                        
      color: paleBlue
    },
    F: {
      keyChar: "Deep depression, funereal lament, groans of misery and longing for the grave.",
      scale: ["F", "G", "A-Flat", "B-Flat", "C", "D-Flat", "E-Flat"],
      scaleHTML: ["F", "G", "A&flat;", "B&flat;", "C", "D&flat;", "E&flat;"],      
      chords: ["F-Minor", "G-Minor", "A-Flat-Major", "B-Flat-Minor", "C-Major", "D-Flat-Major", "E-Flat-Major"],                        
      color: darkRed
    },
    FSharp: {
      keyChar: "A gloomy key: it tugs at passion as a dog biting a dress. Resentment and discontent are its language.",
      scale: ["F-Sharp", "G-Sharp", "A", "B", "C-Sharp", "D", "E"],
      scaleHTML: ["F&sharp;", "G&sharp;", "A", "B", "C&sharp;", "D", "E"],      
      chords: ["F-Sharp-Minor", "G-Sharp-Minor", "A-Major", "B-Minor", "C-Sharp-Major", "D-Major", "E-Major"],                        
      color: darkRed
    },
    G: {
      keyChar: "Discontent, uneasiness, worry about a failed scheme; bad-tempered gnashing of teeth; in a word: resentment and dislike.",
      scale: ["G", "A", "B-Flat", "C", "D", "E-Flat", "F"],
      scaleHTML: ["G", "A", "B&flat;", "C", "D", "E&flat;", "F"],      
      chords: ["G-Minor", "A-Minor", "B-Flat-Major", "C-Minor", "D-Major", "E-Flat-Major", "F-Major"],                        
      color: orange
    },
    GSharp: {
      keyChar: "Grumbler, heart squeezed until it suffocates; wailing lament, difficult struggle; in a word, the color of this key is everything struggling with difficulty.",
      scale: ["G-Sharp", "A-Sharp", "B-Sharp", "C-Sharp", "D-Sharp", "E-Sharp", "F-Double-Sharp"],
      scaleHTML: ["G&sharp;", "A&sharp;", "B&sharp;", "C&sharp;", "D&sharp;", "E&sharp;", "F-&sharp;"],      
      chords: ["G-Sharp-Minor", "A-Sharp-Minor", "B-Sharp-Major", "C-Sharp-Minor", "D-Sharp-Major", "E-Sharp-Major", "F-Sharp-Major"],                        
      color: orange
    },
    A: {
      keyChar: "Grumbler, heart squeezed until it suffocates; wailing lament, difficult struggle; in a word, the color of this key is everything struggling with difficulty.",
      scale: ["A", "B", "C", "D", "E", "F", "G"],
      scaleHTML: ["A", "B", "C", "D", "E", "F", "G"],      
      chords: ["A-Minor", "B-Minor", "C-Major", "D-Minor", "E-Major", "F-Major", "G-Major"],                        
      color: purple
    },
    ASharp: {
      keyChar: "A quaint creature, often dressed in the garment of night. It is somewhat surly and very seldom takes on a pleasant countenance.",
      scale: ["A-Sharp", "B-Sharp", "C-Sharp", "D-Sharp", "E-Sharp", "F-Sharp", "G-Sharp"],
      scaleHTML: ["A&sharp;", "B&sharp;", "C&sharp;", "D&sharp;", "E&sharp;", "F&sharp;", "G&sharp;"],      
      chords: ["A-Sharp-Minor", "B-Sharp-Minor", "C-Sharp-Major", "D-Sharp-Minor", "E-Sharp-Major", "F-Sharp-Major", "G-Sharp-Major"],                        
      color: purple
    },
    B: {
      keyChar: "This is as it were the key of patience, of calm awaiting ones's fate and of submission to divine dispensation.",
      scale: ["B", "C-Sharp", "D-Sharp", "E", "F-Sharp", "G-Sharp", "A-Sharp"],
      scaleHTML: ["B", "C&sharp", "D&sharp", "E", "F&sharp", "G&sharp", "A&sharp"],      
      chords: ["B-Minor", "C-Sharp-Minor", "D-Sharp-Major", "E-Minor", "F-Sharp-Major", "G-Sharp-Major", "A-Sharp-Major"],                        
      color: paleBlue
    },
  }
};