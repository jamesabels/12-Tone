// INIT C MAJOR KEY
$(document).ready(function () {
    printKey(key.major.C);
});


function ArmC() {
    $(".C#-note").click(function() {
        console.log("Clicked"); 
    }); 
}


function initSwiper() {
    mySwiper.slideTo(1, 300, false);
} 

// CHANGE KEYS
function changeKey() {
    initSwiper(); 
    // BASIC KEYS
    // C MAJOR
    if (keyMenu.val() === "c" && modeMenu.val() === "major") {
        // Print Cmaj
        printKey(key.major.C);
    }
    // C MINOR
    if (keyMenu.val() === "c" && modeMenu.val() === "minor") {
        // Print Cmin
        printKey(key.minor.C);
    }
    // D MAJOR
    if (keyMenu.val() === "d" && modeMenu.val() === "major") {
        // Print Dmaj
        printKey(key.major.D);
    }
    // D MINOR
    if (keyMenu.val() === "d" && modeMenu.val() === "minor") {
        // Print Dmin
        printKey(key.minor.D);
    }
    // E MAJOR
    if (keyMenu.val() === "e" && modeMenu.val() === "major") {
        // Print Dmaj
        printKey(key.major.E);
    }
    // E MINOR
    if (keyMenu.val() === "e" && modeMenu.val() === "minor") {
        // Print Dmin
        printKey(key.minor.E);
    }
    // F MAJOR
    if (keyMenu.val() === "f" && modeMenu.val() === "major") {
        // Print Dmaj
        printKey(key.major.F);
    }
    // F MINOR
    if (keyMenu.val() === "f" && modeMenu.val() === "minor") {
        // Print Dmin
        printKey(key.minor.F);
    }
    // G MAJOR
    if (keyMenu.val() === "g" && modeMenu.val() === "major") {
        // Print Dmaj
        printKey(key.major.G);
    }
    // G MINOR
    if (keyMenu.val() === "g" && modeMenu.val() === "minor") {
        // Print Dmin
        printKey(key.minor.G);
    }
    // A MAJOR
    if (keyMenu.val() === "a" && modeMenu.val() === "major") {
        // Print Dmaj
        printKey(key.major.A);
    }
    // A MINOR
    if (keyMenu.val() === "a" && modeMenu.val() === "minor") {
        // Print Dmin
        printKey(key.minor.A);
    }
    // B MAJOR
    if (keyMenu.val() === "b" && modeMenu.val() === "major") {
        // Print Dmaj
        printKey(key.major.B);
    }
    // B MINOR
    if (keyMenu.val() === "b" && modeMenu.val() === "minor") {
        // Print Dmin
        printKey(key.minor.B);
    }
    // SHARP AND FLAT KEYS
    // C# MAJOR
    if (keyMenu.val() === "c#" && modeMenu.val() === "major") {
        // Print C#Maj
        printKey(key.major.CSharp);
    }
    // C# MINOR
    if (keyMenu.val() === "c#" && modeMenu.val() === "minor") {
        // Print C#min
        printKey(key.minor.CSharp);
    }
    // D# MAJOR
    if (keyMenu.val() === "d#" && modeMenu.val() === "major") {
        // Print D#Maj
        printKey(key.major.DSharp);
    }
    // D# MINOR
    if (keyMenu.val() === "d#" && modeMenu.val() === "minor") {
        // Print D#min
        printKey(key.minor.DSharp);
    }
    // F# MAJOR
    if (keyMenu.val() === "f#" && modeMenu.val() === "major") {
        // Print F#Maj
        printKey(key.major.FSharp);
    }
    // F# MINOR
    if (keyMenu.val() === "f#" && modeMenu.val() === "minor") {
        // Print F#min
        printKey(key.minor.FSharp);
    }
    // G# MAJOR
    if (keyMenu.val() === "g#" && modeMenu.val() === "major") {
        // Print G#Maj
        printKey(key.major.GSharp);
    }
    // G# MINOR
    if (keyMenu.val() === "g#" && modeMenu.val() === "minor") {
        // Print G#min
        printKey(key.minor.GSharp);
    }
    // A# MAJOR
    if (keyMenu.val() === "a#" && modeMenu.val() === "major") {
        // Print A#Maj
        printKey(key.minor.ASharp);
    }
    // A# MINOR
    if (keyMenu.val() === "a#" && modeMenu.val() === "minor") {
        // Print A#min
        printKey(key.minor.ASharp);
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
