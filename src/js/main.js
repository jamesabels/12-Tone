// INIT C MAJOR KEY
$(document).ready(function init () {
    printKey(Cmaj);
}); 

function initSwiper() {
    mySwiper.slideTo(1, 300, false);
}

// CHANGE KEYS
function changeKey() {
    initSwiper(); 
    // BASIC KEYS
    // C MAJOR
    if ( keyMenu.val() === "c" && modeMenu.val() === "major") {
        // Print Cmaj
        printKey(Cmaj);
    }
    // C MINOR
    if ( keyMenu.val() === "c" && modeMenu.val() === "minor") {
        // Print Cmin
        printKey(Cmin);
    }
    // D MAJOR
    if ( keyMenu.val() === "d" && modeMenu.val() === "major") {
        // Print Dmaj
        printKey(Dmaj);
    }
    // D MINOR
    if ( keyMenu.val() === "d" && modeMenu.val() === "minor") {
        // Print Dmin
        printKey(Dmin);
    }
    // E MAJOR
    if ( keyMenu.val() === "e" && modeMenu.val() === "major") {
        // Print Dmaj
        printKey(Emaj);
    }
    // E MINOR
    if ( keyMenu.val() === "e" && modeMenu.val() === "minor") {
        // Print Dmin
        printKey(Emin);
    }
    // F MAJOR
    if ( keyMenu.val() === "f" && modeMenu.val() === "major") {
        // Print Dmaj
        printKey(Fmaj);
    }
    // F MINOR
    if ( keyMenu.val() === "f" && modeMenu.val() === "minor") {
        // Print Dmin
        printKey(Fmin);
    }
    // G MAJOR
    if ( keyMenu.val() === "g" && modeMenu.val() === "major") {
        // Print Dmaj
        printKey(Gmaj);
    }
    // G MINOR
    if ( keyMenu.val() === "g" && modeMenu.val() === "minor") {
        // Print Dmin
        printKey(Gmin);
    }
    // A MAJOR
    if ( keyMenu.val() === "a" && modeMenu.val() === "major") {
        // Print Dmaj
        printKey(Amaj);
    }
    // A MINOR
    if ( keyMenu.val() === "a" && modeMenu.val() === "minor") {
        // Print Dmin
        printKey(Amin);
    }
        // B MAJOR
    if ( keyMenu.val() === "b" && modeMenu.val() === "major") {
        // Print Dmaj
        printKey(Bmaj);
    }
    // B MINOR
    if ( keyMenu.val() === "b" && modeMenu.val() === "minor") {
        // Print Dmin
        printKey(Bmin);
    }
    // SHARP AND FLAT KEYS
    // C# MAJOR
    if (keyMenu.val() === "c#" && modeMenu.val() === "major") {
        // Print C#Maj
        printKey(CSharpMaj);
    }
    // C# MINOR
    if ( keyMenu.val() === "c#" && modeMenu.val() === "minor") {
        // Print C#min
        printKey(CSharpMin);
    }
    // D# MAJOR
    if (keyMenu.val() === "d#" && modeMenu.val() === "major") {
        // Print D#Maj
        printKey(DSharpMaj);
    }
    // D# MINOR
    if ( keyMenu.val() === "d#" && modeMenu.val() === "minor") {
        // Print D#min
        printKey(DSharpMin);
    }
    // F# MAJOR
    if (keyMenu.val() === "f#" && modeMenu.val() === "major") {
        // Print F#Maj
        printKey(FSharpMaj);
    }
    // F# MINOR
    if ( keyMenu.val() === "f#" && modeMenu.val() === "minor") {
        // Print F#min
        printKey(FSharpMin);
    }
    // G# MAJOR
    if (keyMenu.val() === "g#" && modeMenu.val() === "major") {
        // Print G#Maj
        printKey(GSharpMaj);
    }
    // G# MINOR
    if ( keyMenu.val() === "g#" && modeMenu.val() === "minor") {
        // Print G#min
        printKey(GSharpMin);
    }
        // A# MAJOR
    if (keyMenu.val() === "a#" && modeMenu.val() === "major") {
        // Print A#Maj
        printKey(ASharpMaj);
    }
    // A# MINOR
    if ( keyMenu.val() === "a#" && modeMenu.val() === "minor") {
        // Print A#min
        printKey(ASharpMin);
    }
}


// Open mobile nav
$("#nav-button").click(function () {
    $("#mobile-nav").removeClass("hide");
    $("#mobile-nav").addClass("full-screen");
    $("#close-button").addClass("fixed-bottom");
});
// Close mobile nav
$("#close-button").click(function () {
    $("#mobile-nav").addClass("hide");
    $("#mobile-nav").removeClass("full-screen");
});
