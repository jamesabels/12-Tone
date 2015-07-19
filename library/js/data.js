var dim = "&deg;";
var flat = "&#9837;";
var sharp = "&sharp;";

var red = "#110a08";
var yellow = "#FFFF00";
var paleBlue = "#A2B5FF";


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
  scale: ["C","D","E","F","G","A","B"],
  color: red
};

// C MINOR
var Cmin = {
  keyChar: "Declaration of love and at the same time the lament of unhappy love. All languishing,           longing, sighing of the love-sick soul lies in this key.",
  scale: ["C","D","E&#9837;","F","G","A&#9837;","B&#9837;"],
  color: red
};

// D MAJOR
var Dmaj = {
  keyChar: "The key of triumph, of Hallejuahs, of war-cries, of victory-rejoicing. Thus, the inviting       symphonies, the marches, holiday songs and heaven-rejoicing choruses are set in this key.",
  scale: ["D","E","F&sharp;","G","A","B","C&sharp;"],
  color: yellow
};

// D MINOR
var Dmin = {
  keyChar: "Melancholy womanliness, the spleen and humours brood.",
  scale: ["D","E","F","G","A","B&sharp;","C"],
  color: yellow
};
// E MAJOR
var Emaj = {
  keyChar: "Noisy shouts of joy, laughing pleasure and not yet complete, full delight lies in E Major.",
  scale: ["E","F&sharp;","G&sharp;","A","B","C&sharp;","D&sharp;"],
  color: paleBlue
};

// E MINOR
var Emin = {
  keyChar: "Naive, womanly innocent declaration of love, lament without grumbling; sighs accompanied by   few tears; this key speaks of the imminent hope of resolving in the pure happiness of C major. ",
  scale: ["E","F&sharp;","G","A","B","C","D"],
  color: paleBlue
};














// SHARP AND FLAT KEYS

// C# MAJOR
var CSharpMaj = {
  keyChar: "A leering key, degenerating into grief and rapture. It cannot laugh, but it can smile; it     cannot howl, but it can at least grimace its crying.",
  scale: ["C&sharp;","D&sharp;","E&sharp;","F&sharp;","G&sharp;","A&sharp;","B&sharp;"],
  color: red
};

// C# MINOR
var CSharpMin = {
  keyChar: "Penitential lamentation, intimate conversation with God, the friend and help-meet of life; sighs of disappointed friendship and love lie in its radius.",
  scale: ["C&sharp;","D&sharp;","E","F&sharp;","G&sharp;","A","B"],
  color: red
};
