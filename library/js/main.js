var dropdownWrap = $(".dropdown-wrap");
var keyMenu = $("#key-select");
var keyDesc = $("#key-char");
var modeMenu = $("#mode-select");
var displaySect = $("display-section");
var modeMenu = $("#mode-select");

function init () {
  if (keyMenu.val() == "c" && modeMenu.val() == "major") {
    keyDesc.append(Cmaj.keyChar);
  }
}


function test () {
  alert(Cmaj.keyChar);
}
