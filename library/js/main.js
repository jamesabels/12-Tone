// HTML TAGS
var dropdownWrap = ".dropdown-wrap";
var keyMenu = "#key-select";
var keyDesc = ".key-desc";
var keyChar = ".key-char";
var modeMenu = "#mode-select";
var displaySect = "display-section";
var modeMenu = "#mode-select";
var notelist = ".note-list";
var chordList = ".chord-list";
var chordLabels = ".chord-labels";

// INIT C MAJOR KEY
(function init () {
    printKey(Cmaj);
}());


// CHANGE KEYS
function changeKey() {
    // BASIC KEYS
    // C MAJOR
    if ( $(keyMenu).val() === "c" && $(modeMenu).val() === "major") {
        // Print Cmaj
        printKey(Cmaj);
    }
    // C MINOR
    if ( $(keyMenu).val() === "c" && $(modeMenu).val() === "minor") {
        // Print Cmin
        printKey(Cmin);
    }
    // D MAJOR
    if ( $(keyMenu).val() === "d" && $(modeMenu).val() === "major") {
        // Print Dmaj
        printKey(Dmaj);
    }
    // D MINOR
    if ( $(keyMenu).val() === "d" && $(modeMenu).val() === "minor") {
        // Print Dmin
        printKey(Dmin);
    }
    // E MAJOR
    if ( $(keyMenu).val() === "e" && $(modeMenu).val() === "major") {
        // Print Dmaj
        printKey(Emaj);
    }
    // E MINOR
    if ( $(keyMenu).val() === "e" && $(modeMenu).val() === "minor") {
        // Print Dmin
        printKey(Emin);
    }
    // F MAJOR
    if ( $(keyMenu).val() === "f" && $(modeMenu).val() === "major") {
        // Print Dmaj
        printKey(Fmaj);
    }
    // F MINOR
    if ( $(keyMenu).val() === "f" && $(modeMenu).val() === "minor") {
        // Print Dmin
        printKey(Fmin);
    }
    // G MAJOR
    if ( $(keyMenu).val() === "g" && $(modeMenu).val() === "major") {
        // Print Dmaj
        printKey(Gmaj);
    }
    // G MINOR
    if ( $(keyMenu).val() === "g" && $(modeMenu).val() === "minor") {
        // Print Dmin
        printKey(Gmin);
    }
    // A MAJOR
    if ( $(keyMenu).val() === "a" && $(modeMenu).val() === "major") {
        // Print Dmaj
        printKey(Amaj);
    }
    // A MINOR
    if ( $(keyMenu).val() === "a" && $(modeMenu).val() === "minor") {
        // Print Dmin
        printKey(Amin);
    }
        // B MAJOR
    if ( $(keyMenu).val() === "b" && $(modeMenu).val() === "major") {
        // Print Dmaj
        printKey(Bmaj);
    }
    // B MINOR
    if ( $(keyMenu).val() === "b" && $(modeMenu).val() === "minor") {
        // Print Dmin
        printKey(Bmin);
    }







    // SHARP AND FLAT KEYS
    // C# MAJOR or
    if ($(keyMenu).val() === "c#" && $(modeMenu).val() === "major") {
        // Print C#Maj
        printKey(CSharpMaj);
    }
    // C# MINOR
    if ( $(keyMenu).val() === "c#" && $(modeMenu).val() === "minor") {
        // Print C#min
        printKey(CSharpMin);
    }

}
