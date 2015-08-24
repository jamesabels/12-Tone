function printLogic(obj, mode) {
    // Append new key description
        $("<p class='key-char'>" + obj.keyChar + "</p>").appendTo(keyDesc);
        $("<h1 class='key-title'>" + obj.title + "</p>").appendTo(displayWrap); 
        // Append note array to unordered list.
        $.each(obj.scale, function (i) {
            var li = $('<li/>')
                .addClass('scale-degree')
                .attr('role', 'menuitem')
                .appendTo(notelist);
            var liLink = $('<a/>')
                .addClass('note-link')
                .addClass(obj.scale[i].toString() + "-note")
                .html(obj.scaleHTML[i])
                .appendTo(li);

                armNote(obj.scale[i]);
        });
        // Append Roman Numeral array to unordered list
        $.each(mode.nums, function(i) {
            var li = $('<li/>')
                .addClass('chord-numerals')
                .attr('role', 'menuitem')
                .appendTo(chordLabels);
            var liLink = $('<p/>')
                .addClass(mode.nums[i].toString() + "-numeral")
                .html(mode.nums[i])
                .appendTo(li);
        });
        // Append chord array to unordered list
        $.each(obj.scale, function(i) {
            var li = $('<li/>')
                .addClass('chord-degree')
                .attr('role', 'menuitem')
                .appendTo(chordList);
            var liLink = $('<a/>')
                .addClass('chord-link')
                .addClass(obj.chords[i].toString())
                .html(obj.scaleHTML[i])
                .appendTo(li);

                armChords(obj.scale[i], obj.chords[i]);

        });
}
