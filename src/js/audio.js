/// <reference path="../../typings/jquery/jquery.d.ts"/>

function armNote(note) {
	if(note === "C") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.C);  
			src.play(); 
			console.log("Clicked!");   
		}); 
	}
	if(note === "C-Sharp") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.Csharp);  
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
	if(note === "D-Sharp") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.Dsharp);  
			src.play(); 
			console.log("Clicked!");   
		}); 
	} 
	if(note === "D-Flat") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.Dflat);  
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
	if(note === "E-flat") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.Eflat);  
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
	if(note === "F-Sharp") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.Fsharp);  
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
	if(note === "G-Sharp") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.Gsharp);  
			src.play(); 
			console.log("Clicked!");   
		}); 
	} 
	if(note === "G-Flat") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.Gflat);  
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
	if(note === "A-Sharp") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.Asharp);  
			src.play(); 
			console.log("Clicked!");   
		}); 
	}
	if(note === "A-Flat") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.Aflat);  
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
	if(note === "B-Flat") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.Bflat);  
			src.play(); 
			console.log("Clicked!");   
		}); 
	} 
} 