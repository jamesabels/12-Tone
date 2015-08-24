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
