console.log(instrument.piano.note.C); 


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