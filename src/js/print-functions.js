// Print
function printLogic(key, mode) {
    // Append new key description
        $("<p class='key-char'>" + key.keyChar + "</p>").appendTo(keyDesc);

        // Append note array to unordered list.
        $.each(key.scale, function(i) {
            var li = $('<li/>')
                .addClass('scale-degree')
                .attr('role', 'menuitem')
                .appendTo(notelist);
            var liLink = $('<a/>')
                .addClass('scale-link')
                .html(key.scale[i])
                .appendTo(li);
        });

        // Append Roman Numeral array to unordered list
        $.each(mode.nums, function(i) {
            var li = $('<li/>')
                .addClass('chord-numerals')
                .attr('role', 'menuitem')
                .appendTo(chordLabels);
            var liLink = $('<a/>')
                .addClass('chord-link')
                .html(mode.nums[i])
                .appendTo(li);
        });

        // Append chord array to unordered list
        $.each(key.scale, function(i) {
            var li = $('<li/>')
                .addClass('chord-degree')
                .attr('role', 'menuitem')
                .appendTo(chordList);
            var liLink = $('<a/>')
                .addClass('chord-link')
                .html(key.scale[i])
                .appendTo(li);
        });
}
// End printLogic //


// A function for all of the logic of printing the key, just pass the correct key object
function printKey( musicalKey ) {
    // Empty before appending
        keyDesc.empty(); 
        keyChar.empty();
        notelist.empty();
        chordList.empty();
        chordLabels.empty();
    // Find Major
    if ( modeMenu.val() === "major") {
        // Pass printLogic they key and mode
        printLogic(musicalKey, majorNumerals);
    }
    // END IF Major //

    // FIND MINOR
    // Pass printLogic they key and mode
    if ( modeMenu.val() === "minor") {
        printLogic(musicalKey, minorNumerals);
    }
}
