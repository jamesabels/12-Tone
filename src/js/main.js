// INIT C MAJOR KEY
$(document).ready(function () {
    printKey(key.major.C);
});


// Make back button toggle menu
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
    document.addEventListener("backbutton", function(e){
       if( $('.key-section').hasClass("hide") ){
         $(".key-section").addClass("shown");
         $(".key-section").removeClass("hide");
       }
       else {
         $(".key-section").addClass("hide");
         $(".key-section").removeClass("shown");
       }
    }, false);
}
