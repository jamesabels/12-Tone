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

// INIT C MAJOR KEY
(function init () {
    // Initialize C Major
    if ( $(keyMenu).val() === "c" && $(modeMenu).val() === "major") {
        // Append new key description
        $("<p class='key-char'>" + Cmaj.keyChar + "</p>").appendTo(keyDesc);

        // Append note array to unordered list.
        $.each(Cmaj.scale, function(i) {
            var li = $('<li/>')
                .addClass('scale-degree')
                .attr('role', 'menuitem')
                .appendTo($(notelist));
            var liLink = $('<a/>')
                .addClass('scale-link')
                .text(Cmaj.scale[i])
                .appendTo(li);
            });

        // Append chord array to unordered list
        $.each(Cmaj.chord, function(i) {
            var li = $('<li/>')
                .addClass('chord-degree')
                .attr('role', 'menuitem')
                .appendTo($(chordList));
            var liLink = $('<a/>')
                .addClass('chord-link')
                .text(Cmaj.chord[i])
                .appendTo(li);
        });


    } // End if statement
}());


// CHANGE KEYS
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
