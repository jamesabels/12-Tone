// HTML TAGS
var dropdownWrap = ".dropdown-wrap";
var keyMenu = "#key-select";
var keyDesc = ".key-desc";
var keyChar = ".key-char";
var modeMenu = "#mode-select";
var displaySect = "display-section";
var modeMenu = "#mode-select";

// INIT C MAJOR KEY
(function init () {
    // Initialize C Major
    if ( $(keyMenu).val() === "c" && $(modeMenu).val() === "major") {
        // Append new key description
        $("<p class='key-char'>" + Cmaj.keyChar + "</p>").appendTo(keyDesc);
    }
}());


// WRITE C MAJOR OBJECT TO HTML
function printCmaj () {
    // Empty key description
    $(keyChar).empty();
    // Append new key description
    $("<p class='key-char'>" + Cmaj.keyChar + "</p>").appendTo(keyDesc);
}

// WRITE C MINOR OBJECT TO HTML
function printCmin () {
    // Empty key description
    $(keyChar).empty();
    // Append new key description
    $("<p class='key-char'>" + Cmin.keyChar + "</p>").appendTo(keyDesc);
}


function changeKey() {
    // C MAJOR
    if ( $(keyMenu).val() === "c" && $(modeMenu).val() === "major") {
        printCmaj();
    }
    // C MINOR
    if ( $(keyMenu).val() === "c" && $(modeMenu).val() === "minor") {
        printCmin();
    }
}
