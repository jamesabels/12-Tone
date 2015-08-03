var dim = "&deg;";
var flat = "&#9837;";
var sharp = "&sharp;";
var doubleSharp = "&#119082;";

var red = "#110a08";
var yellow = "#FFFF00";
var paleBlue = "#A2B5FF";
var darkRed = "#BF0000";
var orange = "#F87D0E";
var purple = "#8E008E";

// Major key roman numerals
var majorNumerals = {
  nums: ["I", "ii", "iii", "IV", "V", "vi", "vii&deg;"]
};
// Natural Minor key roman numerals
var minorNumerals = {
  nums: ["i", "ii&deg;", "III", "iv", "v", "VI", "VII"]
};

// BASIC KEYS

// C MAJOR
var Cmaj = {
  keyChar: "Completely pure. It's character is: innocence, simplicity, naïvety, children's talk.",
  scale: ["C", "D", "E", "F", "G", "A", "B"],
  color: red
};
// C MINOR
var Cmin = {
  keyChar: "Declaration of love and at the same time the lament of unhappy love. All languishing, longing, sighing of the love-sick soul lies in this key.",
  scale: ["C", "D", "E&#9837;", "F", "G", "A&#9837;", "B&#9837;"],
  color: red
};

// D MAJOR
var Dmaj = {
  keyChar: "The key of triumph, of Hallejuahs, of war-cries, of victory-rejoicing.",
  scale: ["D", "E", "F&sharp;", "G", "A", "B", "C&sharp;"],
  color: yellow
};
// D MINOR
var Dmin = {
  keyChar: "Melancholy womanliness, the spleen and humours brood.",
  scale: ["D", "E", "F", "G", "A", "B&#9837;", "C"],
  color: yellow
};

// E MAJOR
var Emaj = {
  keyChar: "Noisy shouts of joy, laughing pleasure and not yet complete, full delight lies in E Major.",
  scale: ["E", "F&sharp;", "G&sharp;", "A", "B", "C&sharp;", "D&sharp;"],
  color: paleBlue
};
// E MINOR
var Emin = {
  keyChar: "Naive, womanly innocent declaration of love, lament without grumbling; sighs accompanied by few tears.",
  scale: ["E", "F&sharp;", "G", "A", "B", "C", "D"],
  color: paleBlue
};

// F MAJOR
var Fmaj = {
  keyChar: "Complaisance & Calm.",
  scale: ["F", "G", "A", "B&#9837;", "C", "D", "E"],
  color: darkRed
};
// F MINOR
var Fmin = {
  keyChar: "Deep depression, funereal lament, groans of misery and longing for the grave.",
  scale: ["F", "G", "A&#9837;", "B&#9837;", "C", "D&#9837;", "E&#9837;"],
  color: darkRed
};

// G MAJOR
var Gmaj = {
  keyChar: "Everything rustic, idyllic and lyrical, every calm and satisfied passion, every tender gratitude for true friendship and faithful love.",
  scale: ["G", "A", "B", "C", "D", "E", "F&sharp;"],
  color: orange
};
// G MINOR
var Gmin = {
  keyChar: "Discontent, uneasiness, worry about a failed scheme; bad-tempered gnashing of teeth; in a word: resentment and dislike.",
  scale: ["G", "A", "B&#9837;", "C", "D", "E&#9837;", "F"],
  color: orange
};

// A MAJOR
var Amaj = {
  keyChar: "This key includes declarations of innocent love, satisfaction with one's state of affairs; hope of seeing one's beloved again when parting; youthful cheerfulness and trust in God.",
  scale: ["A", "B", "C&sharp;", "D", "E", "F&sharp;", "G&sharp;"],
  color: purple
};
// A MINOR
var Amin = {
  keyChar: "Grumbler, heart squeezed until it suffocates; wailing lament, difficult struggle; in a word, the color of this key is everything struggling with difficulty.",
  scale: ["A", "B", "C", "D", "E", "F", "G"],
  color: purple
};

// B MAJOR
var Bmaj = {
  keyChar: "Strongly coloured, announcing wild passions, composed from the most glaring coulors. Anger, rage, jealousy, fury, despair and every burden of the heart lies in its sphere.",
  scale: ["B", "C&sharp;", "D", "E", "F&sharp;", "G&sharp;", "A&sharp;"],
  color: paleBlue
};
// B MINOR
var Bmin = {
  keyChar: "This is as it were the key of patience, of calm awaiting ones's fate and of submission to divine dispensation.",
  scale: ["B", "C&sharp;", "D&sharp;", "E", "F&sharp;", "G&sharp;", "A&sharp;"],
  color: paleBlue
};

// SHARP AND FLAT KEYS

// C# MAJOR
var CSharpMaj = {
  keyChar: "A leering key, degenerating into grief and rapture. It cannot laugh, but it can smile; it cannot howl, but it can at least grimace its crying.",
  scale: ["C&sharp;", "D&sharp;", "E&sharp;", "F&sharp;", "G&sharp;", "A&sharp;", "B&sharp;"],
  color: red
};
// C# MINOR
var CSharpMin = {
  keyChar: "Penitential lamentation, intimate conversation with God, the friend and help-meet of life; sighs of disappointed friendship and love lie in its radius.",
  scale: ["C&sharp;", "D&sharp;", "E", "F&sharp;", "G&sharp;", "A", "B"],
  color: red
};

// D# MAJOR
var DSharpMaj = {
  keyChar: "The key of love, of devotion, of intimate conversation with God.",
  scale: ["D", "E&#9837;", "F", "G", "A&#9837;", "B&#9837;", "C"],
  color: yellow
};
// D# MINOR
var DSharpMin = {
  keyChar: "Feelings of the anxiety of the soul's deepest distress, of brooding despair, of blackest depresssion, of the most gloomy condition of the soul.",
  scale: ["D&sharp;", "E&sharp;", "F&sharp;", "G&sharp;", "A&sharp;", "B", "C&sharp;"],
  color: yellow
};

// F# MAJOR
var FSharpMaj = {
  keyChar: "Triumph over difficulty, free sigh of relief utered when hurdles are surmounted; echo of a soul which has fiercely struggled and finally conquered lies in all uses of this key.",
  scale: ["F&sharp;", "G&sharp;", "A&sharp;", "B", "C&sharp;", "D&sharp;", "E&sharp;"],
  color: darkRed
};
// F# MINOR
var FSharpMin = {
  keyChar: "A gloomy key: it tugs at passion as a dog biting a dress. Resentment and discontent are its language.",
  scale: ["F&sharp;", "G&sharp;", "A", "B", "C&sharp;", "D", "E"],
  color: darkRed
};

// G# MAJOR
var GSharpMaj = {
  keyChar: "Key of the grave. Death, grave, putrefaction, judgment, eternity lie in its radius.",
  scale: ["G&sharp;", "A&sharp;", "B&sharp;", "C&sharp;", "D&sharp;", "E&sharp;", "F&sharp;&sharp;"],
  color: orange
};
// G# MINOR
var GSharpMin = {
  keyChar: "Grumbler, heart squeezed until it suffocates; wailing lament, difficult struggle; in a word, the color of this key is everything struggling with difficulty.",
  scale: ["G&sharp;", "A&sharp;", "B&sharp;", "C&sharp;", "D&sharp;", "E&sharp;", "F&sharp;&sharp;"],
  color: orange
};

// A# MAJOR
var ASharpMaj = {
  keyChar: "Cheerful love, clear conscience, hope aspiration for a better world.",
  scale: ["A", "B&#9837;", "C", "D", "E&#9837;", "F", "G"],
  color: purple
};
// A# MINOR
var ASharpMin = {
  keyChar: "A quaint creature, often dressed in the garment of night. It is somewhat surly and very seldom takes on a pleasant countenance.",
  scale: ["A&sharp;", "B&sharp;", "C&sharp;", "D&sharp;", "E&sharp;", "F&sharp;", "G&sharp;"],
  color: purple
};
