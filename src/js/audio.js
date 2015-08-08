/// <reference path="../../typings/jquery/jquery.d.ts"/>
function replaceSharpNotes() {
	// replace class for sharps 
	if ($('.note-link').hasClass("C&sharp;-note")) {
		$('.note-link').attr('id', 'C-sharp-note');
		$('#C-sharp-note').addClass('C-sharp');
		$('#C-sharp-note').removeClass('C&sharp;-note');
	}
}

function replaceSharpChords() {
	// replace class for sharps 
	if ($('.chord-link').hasClass("C&sharp;-chord")) {
		$('.chord-link').attr('id', 'C-sharp-chord');
		$('#C-sharp-chord').addClass('C-sharp');
		$('#C-sharp-chord').removeClass('C&sharp;-chord');
	}
}

 



function armNote(note) {
	if(note === "C") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.C);  
			src.play(); 
			console.log("Clicked!");  
		}); 
	}
	if(note === "D") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.D);  
			src.play(); 
			console.log("Clicked!");  
		}); 
	}
	if(note === "E") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.E);  
			src.play(); 
			console.log("Clicked!");  
		}); 
	}
	if(note === "F") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.F);  
			src.play(); 
			console.log("Clicked!");  
		}); 
	}
	if(note === "G") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.G);  
			src.play(); 
			console.log("Clicked!");  
		}); 
	}
	if(note === "A") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.A);  
			src.play(); 
			console.log("Clicked!");  
		}); 
	}
	if(note === "B") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.B);  
			src.play(); 
			console.log("Clicked!");  
		}); 
	}
} 