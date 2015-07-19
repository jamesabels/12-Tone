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
    // C MAJOR
    if ( $(keyMenu).val() === "c" && $(modeMenu).val() === "major") {
        printKey(Cmaj);
    }
    // C MINOR
    if ( $(keyMenu).val() === "c" && $(modeMenu).val() === "minor") {
        printKey(Cmin);
    }
    // C# MAJOR
    if ( $(keyMenu).val() === "c#" && $(modeMenu).val() === "major") {
        printKey(CSharpMaj);
    }
    // C# MINOR
    if ( $(keyMenu).val() === "c#" && $(modeMenu).val() === "minor") {
        printKey(CSharpMin);
    }
    // D MAJOR
    if ( $(keyMenu).val() === "d" && $(modeMenu).val() === "major") {
        printKey(Dmaj);
    }
    // D MINOR
    if ( $(keyMenu).val() === "d" && $(modeMenu).val() === "minor") {
        printKey(Dmin);
    }
}
