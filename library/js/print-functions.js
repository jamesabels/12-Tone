// WRITE C MAJOR OBJECT TO HTML //
function printCmaj () {

    // Empty before appending
    $(keyChar).empty();
    $(notelist).empty();
    $(chordList).empty();

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
}
// END printCmaj //


// WRITE C MINOR OBJECT TO HTML
function printCmin () {

    // Empty before appending
    $(keyChar).empty();
    $(notelist).empty();
    $(chordList).empty();

    // Append new key description
    $("<p class='key-char'>" + Cmin.keyChar + "</p>").appendTo(keyDesc);

        // Append note array to unordered list.
    $.each(Cmin.scale, function(i) {
        var li = $('<li/>')
            .addClass('scale-degree')
            .attr('role', 'menuitem')
            .appendTo($(notelist));
        var liLink = $('<a/>')
            .addClass('scale-link')
            .text(Cmin.scale[i])
            .appendTo(li);
    });

    // Append chord array to unordered list
    $.each(Cmin.chord, function(i) {
        var li = $('<li/>')
            .addClass('chord-degree')
            .attr('role', 'menuitem')
            .appendTo($(chordList));
        var liLink = $('<a/>')
            .addClass('chord-link')
            .text(Cmin.chord[i])
            .appendTo(li);
    });
// END printCmaj //
}
