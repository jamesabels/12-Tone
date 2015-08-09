/// <reference path="../../typings/jquery/jquery.d.ts"/>

function armNote(note) {
	if (note === "C") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.C);
			src.play();
		});
	}
	if (note === "C-Sharp") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.Csharp);
			src.play();
		});
	}
	if (note === "D") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.D);
			src.play();
		});
	}
	if (note === "D-Sharp") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.Dsharp);
			src.play();
		});
	}
	if (note === "D-Flat") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.Dflat);
			src.play();
		});
	}
	if (note === "E") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.E);
			src.play();
		});
	}
	if (note === "E-Flat") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.Eflat);
			src.play();
		});
	}
	if (note === "F") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.F);
			src.play();
		});
	}
	if (note === "F-Sharp") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.Fsharp);
			src.play();
		});
	}
	if (note === "G") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.G);
			src.play();
		});
	}
	if (note === "G-Sharp") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.Gsharp);
			src.play();
		});
	}
	if (note === "G-Flat") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.Gflat);
			src.play();
		});
	}
	if (note === "A") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.A);
			src.play();
		});
	}
	if (note === "A-Sharp") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.Asharp);
			src.play();
		});
	}
	if (note === "A-Flat") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.Aflat);
			src.play();
		});
	}
	if (note === "B") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.B);
			src.play();
		});
	}
	if (note === "B-Flat") {
		$("." + note + "-note").click(function () {
			var src = new Audio(instrument.piano.note.Bflat);
			src.play();
		});
	}
}

function armChords(note, chord) {
	// C major
	if (note === "C" && chord === "C-Major") {
		$("." + chord).click(function () {
			var src = new Audio(instrument.piano.chord.major.C);
			src.play();
		});
	}
	// C# major
	if (note === "C-Sharp" && chord === "C-Sharp-Major") {
		$("." + chord).click(function () {
			var src = new Audio(instrument.piano.chord.major.Csharp);
			src.play();
		});
	}
	// C minor
	if (note === "C" && chord === "C-Minor") {
		$("." + chord).click(function () {
			var src = new Audio(instrument.piano.chord.minor.C);
			src.play();
		});
	}
	// C# minor
	if (note === "C-Sharp" && chord === "C-Sharp-Minor") {
		$("." + chord).click(function () {
			var src = new Audio(instrument.piano.chord.minor.Csharp);
			src.play();
		});
	}
	// D major
	if (note === "D" && chord === "D-Major") {
		$("." + chord).click(function () {
			var src = new Audio(instrument.piano.chord.major.D);
			src.play();
		});
	}
	// D# major
	if (note === "D-Sharp" && chord === "D-Sharp-Major") {
		$("." + chord).click(function () {
			var src = new Audio(instrument.piano.chord.major.Dsharp);
			src.play();
		});
	}
	// Db major
	if (note === "D-Flat" && chord === "D-Flat-Major") {
		$("." + chord).click(function () {
			var src = new Audio(instrument.piano.chord.major.Dflat);
			src.play();
		});
	}
	// D minor
	if (note === "D" && chord === "D-Minor") {
		$("." + chord).click(function () {
			var src = new Audio(instrument.piano.chord.minor.D);
			src.play();
		});
	}
	// D# minor
	if (note === "D-Sharp" && chord === "D-Sharp-Minor") {
		$("." + chord).click(function () {
			var src = new Audio(instrument.piano.chord.minor.Dsharp);
			src.play();
		});
	}
	// Db minor
	if (note === "D-Flat" && chord === "D-Flat-Minor") {
		$("." + chord).click(function () {
			var src = new Audio(instrument.piano.chord.minor.Dflat);
			src.play();
		});
	}
	// E major
	if (note === "E" && chord === "E-Major") {
		$("." + chord).click(function () {
			var src = new Audio(instrument.piano.chord.major.E);
			src.play();
		});
	}
	// Eb major
	if (note === "E-Flat" && chord === "E-Flat-Major") {
		$("." + chord).click(function () {
			var src = new Audio(instrument.piano.chord.major.Eflat);
			src.play();
		});
	}
	// E minor
	if (note === "E" && chord === "E-Minor") {
		$("." + chord).click(function () {
			var src = new Audio(instrument.piano.chord.minor.E);
			src.play();
		});
	}
	// Eb minor
	if (note === "E-Flat" && chord === "E-Flat-Minor") {
		$("." + chord).click(function () {
			var src = new Audio(instrument.piano.chord.minor.Eflat);
			src.play();
		});
	}
	// F major
	if (note === "F" && chord === "F-Major") {
		$("." + chord).click(function () {
			var src = new Audio(instrument.piano.chord.major.F);
			src.play();
		});
	}
	// F# major
	if (note === "F-Sharp" && chord === "F-Sharp-Major") {
		$("." + chord).click(function () {
			var src = new Audio(instrument.piano.chord.major.Fsharp);
			src.play();
		});
	}
	// F minor
	if (note === "F" && chord === "F-Minor") {
		$("." + chord).click(function () {
			var src = new Audio(instrument.piano.chord.minor.F);
			src.play();
		});
	}
	// F# minor
	if (note === "F-Sharp" && chord === "F-Sharp-Minor") {
		$("." + chord).click(function () {
			var src = new Audio(instrument.piano.chord.minor.Fsharp);
			src.play();
		});
	}
	// G major
	if (note === "G" && chord === "G-Major") {
		$("." + chord).click(function () {
			var src = new Audio(instrument.piano.chord.major.G);
			src.play();
		});
	}
	// G# major
	if (note === "G-Sharp" && chord === "G-Sharp-Major") {
		$("." + chord).click(function () {
			var src = new Audio(instrument.piano.chord.major.Gsharp);
			src.play();
		});
	}
	// Gb major
	if (note === "G-Flat" && chord === "G-Flat-Major") {
		$("." + chord).click(function () {
			var src = new Audio(instrument.piano.chord.major.Dflat);
			src.play();
		});
	}
	// G minor
	if (note === "G" && chord === "G-Minor") {
		$("." + chord).click(function () {
			var src = new Audio(instrument.piano.chord.minor.G);
			src.play();
		});
	}
	// G# minor
	if (note === "G-Sharp" && chord === "G-Sharp-Minor") {
		$("." + chord).click(function () {
			var src = new Audio(instrument.piano.chord.minor.Gsharp);
			src.play();
		});
	}
	// Gb minor
	if (note === "G-Flat" && chord === "G-Flat-Minor") {
		$("." + chord).click(function () {
			var src = new Audio(instrument.piano.chord.minor.Gflat);
			src.play();
		});
	}
	// A major
	if (note === "A" && chord === "A-Major") {
		$("." + chord).click(function () {
			var src = new Audio(instrument.piano.chord.major.A);
			src.play();
		});
	}
	// A# major
	if (note === "A-Sharp" && chord === "A-Sharp-Major") {
		$("." + chord).click(function () {
			var src = new Audio(instrument.piano.chord.major.Asharp);
			src.play();
		});
	}
	// Ab major
	if (note === "A-Flat" && chord === "A-Flat-Major") {
		$("." + chord).click(function () {
			var src = new Audio(instrument.piano.chord.major.Aflat);
			src.play();
		});
	}
	// A minor
	if (note === "A" && chord === "A-Minor") {
		$("." + chord).click(function () {
			var src = new Audio(instrument.piano.chord.minor.A);
			src.play();
		});
	}
	// A# minor
	if (note === "A-Sharp" && chord === "A-Sharp-Minor") {
		$("." + chord).click(function () {
			var src = new Audio(instrument.piano.chord.minor.Asharp);
			src.play();
		});
	}
	// Ab minor
	if (note === "A-Flat" && chord === "A-Flat-Minor") {
		$("." + chord).click(function () {
			var src = new Audio(instrument.piano.chord.minor.Aflat);
			src.play();
		});
	}	
	// B major
	if (note === "B" && chord === "B-Major") {
		$("." + chord).click(function () {
			var src = new Audio(instrument.piano.chord.major.B);
			src.play();
		});
	}
	// Bb major
	if (note === "B-Flat" && chord === "B-Flat-Major") {
		$("." + chord).click(function () {
			var src = new Audio(instrument.piano.chord.major.Bflat);
			src.play();
		});
	}
	// B minor
	if (note === "B" && chord === "B-Minor") {
		$("." + chord).click(function () {
			var src = new Audio(instrument.piano.chord.minor.B);
			src.play();
		});
	}
	// Bb minor
	if (note === "B-Flat" && chord === "B-Flat-Minor") {
		$("." + chord).click(function () {
			var src = new Audio(instrument.piano.chord.minor.Bflat);
			src.play();
		});
	}
} 