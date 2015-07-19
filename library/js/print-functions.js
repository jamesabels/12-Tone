// A function for all of the logic of printing the key, just pass the correct key object
function printKey( musicalKey ) {
    // Empty before appending
        $(keyChar).empty();
        $(notelist).empty();
        $(chordList).empty();
        $(chordLabels).empty();
    // Find Major
    if ( $(modeMenu).val() === "major") {
        // Append new key description
        $("<p class='key-char'>" + musicalKey.keyChar + "</p>").appendTo(keyDesc);

        // Append note array to unordered list.
        $.each(musicalKey.scale, function(i) {
            var li = $('<li/>')
                .addClass('scale-degree')
                .attr('role', 'menuitem')
                .appendTo($(notelist));
            var liLink = $('<a/>')
                .addClass('scale-link')
                .text(musicalKey.scale[i])
                .appendTo(li);
        });

        // Append Roman Numeral array to unordered list
        $.each(majorNumerals.nums, function(i) {
            var li = $('<li/>')
                .addClass('chord-degree')
                .attr('role', 'menuitem')
                .appendTo($(chordLabels));
            var liLink = $('<a/>')
                .addClass('chord-link')
                .html(majorNumerals.nums[i])
                .appendTo(li);
        });

        // Append chord array to unordered list
        $.each(musicalKey.chord, function(i) {
            var li = $('<li/>')
                .addClass('chord-degree')
                .attr('role', 'menuitem')
                .appendTo($(chordList));
            var liLink = $('<a/>')
                .addClass('chord-link')
                .text(musicalKey.chord[i])
                .appendTo(li);
        });
    }
    // END IF Major //

    // FIND MINOR
    if ( $(modeMenu).val() === "minor") {
         // Append note array to unordered list.
        $.each(musicalKey.scale, function(i) {
            var li = $('<li/>')
                .addClass('scale-degree')
                .attr('role', 'menuitem')
                .appendTo($(notelist));
            var liLink = $('<a/>')
                .addClass('scale-link')
                .text(musicalKey.scale[i])
                .appendTo(li);
        });

        // Append Roman Numeral array to unordered list
        $.each(minorNumerals.nums, function(i) {
            var li = $('<li/>')
                .addClass('chord-degree')
                .attr('role', 'menuitem')
                .appendTo($(chordLabels));
            var liLink = $('<a/>')
                .addClass('chord-link')
                .html(minorNumerals.nums[i])
                .appendTo(li);
        });

        // Append chord array to unordered list
        $.each(musicalKey.chord, function(i) {
            var li = $('<li/>')
                .addClass('chord-degree')
                .attr('role', 'menuitem')
                .appendTo($(chordList));
            var liLink = $('<a/>')
                .addClass('chord-link')
                .text(musicalKey.chord[i])
                .appendTo(li);
        });

    }
}
