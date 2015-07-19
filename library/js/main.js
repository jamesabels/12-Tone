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
