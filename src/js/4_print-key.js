function printKey( musicalKey ) {
    // Empty before appending
        keyDesc.empty();
        keyChar.empty();
        notelist.empty();
        chordList.empty();
        chordLabels.empty();
        displayWrap.empty();  
    // Find Major
    if ( modeMenu.val() === "major") {
        // Pass printLogic they key and mode
        printLogic(musicalKey, key.mode.major);
    }
    // END IF Major //

    // FIND MINOR
    // Pass printLogic they key and mode
    if ( modeMenu.val() === "minor") {
        printLogic(musicalKey, key.mode.minor);
    }
}
