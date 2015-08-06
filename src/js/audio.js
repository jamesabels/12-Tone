Gibberish.init(); 
 var synth = new Gibberish.Synth({ attack:44, decay:44100 }).connect(); 
synth.waveform = "Triangle"; 


function playKey( key ) {
	 if( key === "Cmaj" ) {
		$(".section-title").click(function() {
			synth.note(400); 
		});	 
	 }
}