var kenobi = {
    "hit points": 120
}

var anakin = {
    "hit points": 100
}

var ahsoka = {
    "hit points": 80
}
$(document).on("click", function() {
    $("#kenobi").appendTo("#selectedChar");
    document.getElementById("title").innerHTML = "Select Your Defender!"
  });

// $(document).on("click", function() {
//     $("#character").appendTo("#selectedDef");
//     document.getElementById("title").innerHTML = "FIGHT!!!"
//   });s