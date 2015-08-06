Gibberish.init();
var a = new Gibberish.Synth({ attack:44, decay:44100 }).connect();
 
a.waveform = "Triangle"; 

function playNote() {
	note = new Audio(); 
	note.src = "sound/piano/aNote.wav"; 
	
	note.play(); 
}